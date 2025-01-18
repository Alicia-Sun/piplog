import argparse
import subprocess
import os
from datetime import datetime

HISTORY_FILE = '.piphistory'

def add_curr():
    try:
        result = subprocess.run(['pip', 'freeze'], capture_output=True, text=True, check=True)
        packages = result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error fetching package list: {e}")
        return

    timestamp = datetime.now().isoformat()
    version_entry = f"--- Version: {timestamp} ---\n{packages}\n"

    with open(HISTORY_FILE, 'a') as f:
        f.write(version_entry)

    print(f"Added current package list as version {timestamp}.")

def parse_history():
    if not os.path.exists(HISTORY_FILE):
        print("No history found. Use 'add_curr' to create a history entry.")
        return []

    with open(HISTORY_FILE, 'r') as f:
        content = f.read()

    versions = content.strip().split('--- Version:')
    parsed_versions = {}
    for v in versions:
        if v.strip() == '':
            continue
        lines = v.strip().split('\n')
        header = lines[0].strip()
        timestamp = header.replace(' ', '').replace(':', '').replace('-', '').replace('T', ' ')
        timestamp = header.replace('--- Version: ', '').replace(' ---', '')
        packages = set(line.strip() for line in lines[1:] if line.strip())
        parsed_versions[timestamp] = packages

    return parsed_versions

def get_current_packages():
    try:
        result = subprocess.run(['pip', 'freeze'], capture_output=True, text=True, check=True)
        packages = set(line.strip() for line in result.stdout.splitlines() if line.strip())
        return packages
    except subprocess.CalledProcessError as e:
        print(f"Error fetching current packages: {e}")
        return set()

def view_diff(version1=None, version2=None):
    versions = parse_history()
    if not versions:
        return

    sorted_versions = sorted(versions.keys())
    if version1 and not version2:
        if version1 not in versions:
            print(f"Version {version1} not found.")
            return
        current_packages = get_current_packages()
        target_packages = versions[version1]
        diff_added = current_packages - target_packages
        diff_removed = target_packages - current_packages
    elif version1 and version2:
        if version1 not in versions or version2 not in versions:
            print("One or both versions not found.")
            return
        packages1 = versions[version1]
        packages2 = versions[version2]
        diff_added = packages2 - packages1
        diff_removed = packages1 - packages2
    else:
        if len(sorted_versions) < 2:
            print("Not enough versions to compare.")
            return
        version1 = sorted_versions[-2]
        version2 = sorted_versions[-1]
        packages1 = versions[version1]
        packages2 = versions[version2]
        diff_added = packages2 - packages1
        diff_removed = packages1 - packages2

    print(f"Differences between versions '{version1}' and '{version2 if version2 else 'current'}':")
    if diff_added:
        print("\nAdded packages:")
        for pkg in sorted(diff_added):
            print(f"  + {pkg}")
    if diff_removed:
        print("\nRemoved packages:")
        for pkg in sorted(diff_removed):
            print(f"  - {pkg}")
    if not diff_added and not diff_removed:
        print("No differences found.")

def revert(version=None):
    versions = parse_history()
    if not versions:
        return

    sorted_versions = sorted(versions.keys())
    if version and version not in versions:
        print(f"Version {version} not found.")
        return
    elif not version:
        if len(sorted_versions) < 1:
            print("No versions to revert to.")
            return
        version = sorted_versions[-1]

    confirmation = input(f"Are you sure you want to revert to version '{version}'? This will delete all history entries after this version. (y/N): ")
    if confirmation.lower() != 'y':
        print("Revert canceled.")
        return

    target_packages = versions[version]
    try:
        with open('requirements_temp.txt', 'w') as req_file:
            for pkg in target_packages:
                req_file.write(f"{pkg}\n")
        subprocess.run(['pip', 'install', '-r', 'requirements_temp.txt'], check=True)
        os.remove('requirements_temp.txt')
    except subprocess.CalledProcessError as e:
        print(f"Error during pip install: {e}")
        return

    new_history = ""
    for v in sorted_versions:
        new_history += f"--- Version: {v} ---\n"
        for pkg in versions[v]:
            new_history += f"{pkg}\n"
        new_history += "\n"
        if v == version:
            break

    with open(HISTORY_FILE, 'w') as f:
        f.write(new_history)

    print(f"Reverted to version '{version}'. All subsequent history entries have been deleted.")

def main():
    parser = argparse.ArgumentParser(description='piphistory: Track pip package history.')
    subparsers = parser.add_subparsers(dest='command', help='Available commands')

    # add_curr command
    parser_add = subparsers.add_parser('add_curr', help='Add current package list to history')

    # view_diff command
    parser_diff = subparsers.add_parser('view_diff', help='View differences between package versions')
    parser_diff.add_argument('version1', nargs='?', default=None, help='First version to compare')
    parser_diff.add_argument('version2', nargs='?', default=None, help='Second version to compare')

    # revert command
    parser_revert = subparsers.add_parser('revert', help='Revert to a specific package version')
    parser_revert.add_argument('version', nargs='?', default=None, help='Version to revert to')

    args = parser.parse_args()

    if args.command == 'add_curr':
        add_curr()
    elif args.command == 'view_diff':
        view_diff(args.version1, args.version2)
    elif args.command == 'revert':
        revert(args.version)
    else:
        parser.print_help()

if __name__ == '__main__':
    main()
