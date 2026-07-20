import api from "./api";

export async function sendMessage(message: string): Promise<string> {
  const response = await api.post("/chat", {
    message,
  });

  return response.data.response;
}