import json

from app.services.file_service import (
    create_python_file,
    read_file,
    replace_in_file,
)


def dispatch_tool(tool_call):

    function_name = tool_call.function.name

    print(f"Dispatching: {function_name}")

    arguments = json.loads(tool_call.function.arguments)

    if function_name == "create_python_file":
        return create_python_file(
            arguments["filename"],
            arguments["content"]
        )

    if function_name == "read_file":
        return read_file(
            arguments["path"]
        )

    if function_name == "replace_in_file":
        return replace_in_file(
            arguments["path"],
            arguments["search"],
            arguments["replace"]
        )

    raise ValueError(
        f"Unknown tool: {function_name}"
    )