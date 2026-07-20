from typing import Literal, Optional

from pydantic import BaseModel


class CreateFileAction(BaseModel):
    action: Literal["create_file"]
    filename: str
    content: str


class ChatAction(BaseModel):
    action: Literal["chat"]
    response: str


class AtlasResponse(BaseModel):
    """
    This is the object Atlas will eventually return after
    reasoning about a user's request.
    """

    action: Literal["chat", "create_file"]

    # Used for normal chat
    response: Optional[str] = None

    # Used when creating files
    filename: Optional[str] = None
    content: Optional[str] = None