import Card from "../common/Card";

const tasks = [
  "Build Home page",
  "Connect AI backend",
  "Design Memory system",
];

export default function TodaysFocus() {
  return (
    <Card title="Today's Focus">
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={task} className="flex items-center gap-3">
            <span
              className={
                index === 0 ? "text-green-400" : "text-slate-500"
              }
            >
              {index === 0 ? "✓" : "□"}
            </span>

            {task}
          </li>
        ))}
      </ul>
    </Card>
  );
}