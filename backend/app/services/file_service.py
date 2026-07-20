from pathlib import Path

WORKSPACE = Path("app/workspace")
WORKSPACE.mkdir(parents=True, exist_ok=True)


def create_python_file(filename: str, code: str):
    """
    Creates a Python file inside Atlas's workspace.
    """

    path = WORKSPACE / filename

    path.write_text(code, encoding="utf-8")

    return path