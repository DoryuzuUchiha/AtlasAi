import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


def create_chat_completion(messages, tools=None):

    kwargs = {
        "model": "gpt-5.5",
        "messages": messages,
    }

    if tools is not None:
        kwargs["tools"] = tools
        kwargs["tool_choice"] = "auto"

    return client.chat.completions.create(**kwargs)