const wins = [
  "Backend connected",
  "Tailwind configured",
  "Workspace layout completed",
];

export default function TodaysWins() {
  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
      <h2 className="text-lg font-semibold mb-4">
        Today's Wins
      </h2>

      <ul className="space-y-3">
        {wins.map((win) => (
          <li key={win} className="flex items-center gap-3">
            <span className="text-green-400">✓</span>
            <span>{win}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}