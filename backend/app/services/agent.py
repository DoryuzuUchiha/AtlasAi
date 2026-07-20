from app.services.file_service import create_python_file
from app.services.ai_service import chat_with_llm


def ask_atlas(message: str) -> str:
    lower = message.lower()

    # First Atlas action
    if "hello world" in lower and "python" in lower:
        create_python_file(
            "hello.py",
            'print("Hello, World!")'
        )

        return "✅ I created **hello.py** in your workspace."

    # Everything else goes to the LLM
    return chat_with_llm(message)