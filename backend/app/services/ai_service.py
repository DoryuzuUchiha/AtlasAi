import json
import os

from dotenv import load_dotenv
from openai import OpenAI

from app.agent.action_models import AtlasResponse

from app.agent.tools import TOOLS
from app.agent.action_dispatcher import dispatch_tool

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

SYSTEM_PROMPT = """
You are Atlas.

You are an AI operating system.

If the user asks you to create a Python file,
use the create_python_file tool.

For normal conversation, simply reply normally.
"""


def chat_with_llm(message: str) -> AtlasResponse:

    response = client.chat.completions.create(
        model="gpt-5.5",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": message
            }
        ],
        tools=TOOLS,
        tool_choice="auto"
    )

    assistant_message = response.choices[0].message

    # If GPT decided to call a tool
    if assistant_message.tool_calls:

        tool_call = assistant_message.tool_calls[0]

        if tool_call.function.name == "create_python_file":

            result = dispatch_tool(tool_call)

            # Send the tool result back to GPT so it can generate
            # a natural language response.
            second_response = client.chat.completions.create(
                model="gpt-5.5",
                messages=[
                    {
                        "role": "system",
                        "content": SYSTEM_PROMPT
                    },
                    {
                        "role": "user",
                        "content": message
                    },
                    assistant_message,
                    {
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": json.dumps(result)
                    }
                ]
            )

            return AtlasResponse(
                action="chat",
                response=second_response.choices[0].message.content
            )

    # Normal chat response
    return AtlasResponse(
        action="chat",
        response=assistant_message.content
    )