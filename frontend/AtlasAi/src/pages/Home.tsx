import ContinueWorking from "../components/home/ContinueWorking";
import TodaysFocus from "../components/home/TodaysFocus";
import RecentConversations from "../components/home/RecentConversations";
import RecentFiles from "../components/home/RecentFiles";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 p-10 text-white">
      <h1 className="text-5xl font-bold">
        Good Evening, Diego 👋
      </h1>

      <p className="mt-3 text-slate-400">
        Welcome back to Atlas.
      </p>

      <div className="mt-10 space-y-6">
        <ContinueWorking />

        <div className="grid grid-cols-2 gap-6">
          <TodaysFocus />
          <RecentConversations />
        </div>

        <RecentFiles />
      </div>
    </main>
  );
}