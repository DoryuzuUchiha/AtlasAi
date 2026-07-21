from pathlib import Path

WORKSPACE = Path("app/workspace")


def create_python_file(filename: str, content: str):
    WORKSPACE.mkdir(parents=True, exist_ok=True)

    file_path = WORKSPACE / filename
    file_path.write_text(content, encoding="utf-8")

    return f"Created {file_path}"


def read_file(path: str):
    file_path = WORKSPACE / path

    if not file_path.exists():
        raise FileNotFoundError(f"{path} does not exist.")

    return file_path.read_text(encoding="utf-8")


def replace_in_file(path: str, search: str, replace: str):
    file_path = WORKSPACE / path

    if not file_path.exists():
        raise FileNotFoundError(f"{path} does not exist.")

    text = file_path.read_text(encoding="utf-8")

    if search not in text:
        raise ValueError(
            "Search text not found in file."
        )

    updated = text.replace(search, replace, 1)

    file_path.write_text(updated, encoding="utf-8")

    return f"Updated {path}"