import os
import codecs


def find_files_with_use_client(directory):
    files_with_use_client = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            with codecs.open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                first_line = f.readline().strip()
                if "\"use client\"" in first_line or "use client" in first_line:
                    files_with_use_client.append(file_path)

    return files_with_use_client

def find_transpiled_file(path: str, build_dir: str):
    js_file = ".".join("/".join(path.split("/")[1:]).split(".")[:-1]) + ".js"
    return f"{build_dir}/{js_file}"

directory = "lib/components"
files = find_files_with_use_client(directory)
directory = "lib/contexts"
files += find_files_with_use_client(directory)

for file in files:
    print(f"Processing {file}...")
    js_file = find_transpiled_file(file, "dist")
    # add "use client" to the top of the file
    try:
        with open(js_file, "r") as f:
            lines = f.readlines()
            lines.insert(0, "\"use client\";\n")
        with open(js_file, "w") as f:
            f.writelines(lines)
    except:
        print(f"Error processing {file}")
        continue
