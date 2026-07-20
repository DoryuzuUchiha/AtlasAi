from app.services.file_service import create_python_file


def create_python_file_tool(filename: str, content: str):
    """
    Creates a Python file in the Atlas workspace.
    """

    path = create_python_file(filename, content)

    return {
        "status": "success",
        "path": str(path)
    }


TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "create_python_file",
            "description": (
                "Create a Python file inside the Atlas workspace."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "filename": {
                        "type": "string",
                        "description": "The filename including .py"
                    },
                    "content": {
                        "type": "string",
                        "description": "The complete Python source code"
                    }
                },
                "required": [
                    "filename",
                    "content"
                ]
            }
        }
    }
]