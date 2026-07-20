import Sidebar from "./Sidebar";
import Header from "./Header";

import WorkspaceOverview from "../workspace/WorkspaceOverview";
import AtlasPanel from "../atlas/AtlasPanel";

export default function WorkspaceLayout() {
  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col">

      <Header />

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}

        <div className="w-64 border-r border-slate-800">
          <Sidebar />
        </div>

        {/* Workspace */}

        <div className="flex-1 bg-slate-900 overflow-auto">
          <WorkspaceOverview />
        </div>

        {/* Atlas */}

        <div className="w-96 border-l border-slate-800 bg-slate-950">
          <AtlasPanel />
        </div>

      </div>

    </div>
  );
}