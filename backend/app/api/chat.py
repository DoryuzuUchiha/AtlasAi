from fastapi import APIRouter
from pydantic import BaseModel

from app.agent.atlas_agent import ask_atlas

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):

    result = ask_atlas(request.message)

    return {
        "response": result.response
    }