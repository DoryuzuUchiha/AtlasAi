interface ProgressCardProps {
  progress: number;
}

export default function ProgressCard({
  progress,
}: ProgressCardProps) {
  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
      <h2 className="text-lg font-semibold mb-4">Progress</h2>

      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-slate-400">
        {progress}% Complete
      </p>
    </div>
  );
}