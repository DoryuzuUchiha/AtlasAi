import Card from "../common/Card";

const conversations = [
  "Sidebar redesign",
  "FastAPI planning",
  "Memory ideas",
];

export default function RecentConversations() {
  return (
    <Card title="Recent Conversations">
      <div className="space-y-3">
        {conversations.map((conversation) => (
          <div
            key={conversation}
            className="rounded-lg bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"
          >
            💬 {conversation}
          </div>
        ))}
      </div>
    </Card>
  );
}