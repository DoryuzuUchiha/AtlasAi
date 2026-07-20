interface GoalCardProps {
  title: string;
  description: string;
}

export default function GoalCard({
  title,
  description,
}: GoalCardProps) {
  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-4 text-slate-400">
        {description}
      </p>
    </div>
  );
}