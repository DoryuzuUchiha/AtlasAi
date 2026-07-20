const tasks = [
  "Build Dashboard",
  "Connect FastAPI",
  "Create Memory System",
];

export default function NextTasks() {
  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
      <h2 className="text-lg font-semibold mb-4">
        Next Tasks
      </h2>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task} className="flex items-center gap-3">
            <span className="text-slate-400">□</span>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}