from app.agent.action_models import AtlasResponse
from app.services.ai_service import chat_with_llm


def ask_atlas(message: str) -> AtlasResponse:
    """
    Main entry point for Atlas.

    Every user message passes through this function.

    Eventually this agent will decide which tools to call,
    but for now it simply forwards the request to the LLM.
    """

    return chat_with_llm(message)