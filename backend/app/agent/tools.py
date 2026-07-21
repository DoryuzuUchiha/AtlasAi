TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "create_python_file",
            "description": "Create a new Python file inside the workspace.",
            "parameters": {
                "type": "object",
                "properties": {
                    "filename": {
                        "type": "string"
                    },
                    "content": {
                        "type": "string"
                    }
                },
                "required": [
                    "filename",
                    "content"
                ]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "read_file",
            "description": "Read a file from the workspace.",
            "parameters": {
                "type": "object",
                "properties": {
                    "path": {
                        "type": "string"
                    }
                },
                "required": [
                    "path"
                ]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "replace_in_file",
            "description": "Replace one block of text inside an existing file.",
            "parameters": {
                "type": "object",
                "properties": {
                    "path": {
                        "type": "string"
                    },
                    "search": {
                        "type": "string"
                    },
                    "replace": {
                        "type": "string"
                    }
                },
                "required": [
                    "path",
                    "search",
                    "replace"
                ]
            }
        }
    }
]