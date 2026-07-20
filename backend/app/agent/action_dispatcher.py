import json

from app.agent.tools import create_python_file_tool


def dispatch_tool(tool_call):
    """
    Executes the requested tool and returns the result.
    """

    tool_name = tool_call.function.name

    arguments = json.loads(tool_call.function.arguments)

    if tool_name == "create_python_file":
        return create_python_file_tool(
            filename=arguments["filename"],
            content=arguments["content"]
        )

    raise ValueError(f"Unknown tool: {tool_name}")