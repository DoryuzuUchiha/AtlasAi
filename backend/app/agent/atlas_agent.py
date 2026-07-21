import json

from app.agent.action_dispatcher import dispatch_tool
from app.agent.action_models import AtlasResponse
from app.agent.tools import TOOLS
from app.services.ai_service import create_chat_completion

SYSTEM_PROMPT = """
You are Atlas, an AI software engineering assistant.

You have access to tools that allow you to:

- Create Python files
- Read files
- Modify existing files

Rules:

1. Always use tools when interacting with files.
2. Never guess the contents of a file.
3. Read a file before modifying it.
4. Only modify what the user requests.
5. Continue using tools until the task is complete.
6. Once the task is complete, respond naturally.
"""


def ask_atlas(message: str) -> AtlasResponse:

    messages = [
        {
            "role": "system",
            "content": SYSTEM_PROMPT
        },
        {
            "role": "user",
            "content": message
        }
    ]

    while True:

        response = create_chat_completion(
            messages=messages,
            tools=TOOLS
        )

        assistant_message = response.choices[0].message

        messages.append(assistant_message)

        #
        # Finished
        #
        if not assistant_message.tool_calls:

            return AtlasResponse(
                action="chat",
                response=assistant_message.content
            )

        #
        # Execute every requested tool
        #
        for tool_call in assistant_message.tool_calls:

            print(f"Calling tool: {tool_call.function.name}")

            tool_result = dispatch_tool(tool_call)

            messages.append(
                {
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": json.dumps(tool_result)
                }
            )