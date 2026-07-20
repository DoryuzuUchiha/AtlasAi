import GoalCard from "./GoalCard";
import ProgressCard from "./ProgressCard";
import TodaysWins from "./TodaysFocus";
import NextTasks from "./QuickNotes";

export default function WorkspaceOverview() {
  return (
    <main className="p-10 space-y-8">
      <div>
        <h1 className="text-5xl font-bold">
          HR Management System
        </h1>

        <p className="text-slate-400 mt-2">
          Current Goal
        </p>
      </div>

      <GoalCard
        title="Design the first workspace prototype."
        description="Atlas recommends focusing on the overall workspace experience before implementing features."
      />

      <div className="grid grid-cols-2 gap-6">
        <TodaysWins />
        <ProgressCard progress={40} />
      </div>

      <NextTasks />
    </main>
  );
}