import {
  Home,
  FolderKanban,
  MessageSquare,
  Brain,
  Files,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    label: "Conversations",
    icon: MessageSquare,
    path: "/conversations",
    disabled: true,
  },
  {
    label: "Memory",
    icon: Brain,
    path: "/memory",
    disabled: true,
  },
  {
    label: "Files",
    icon: Files,
    path: "/files",
    disabled: true,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex h-full flex-col p-6">

      {/* Logo */}

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          Atlas
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your personal AI operating system
        </p>
      </div>

      {/* Navigation */}

      <nav className="space-y-2">

        {navigation.map((item) => {

          const Icon = item.icon;

          const active = location.pathname === item.path;

          if (item.disabled) {
            return (
              <div
                key={item.label}
                className="flex cursor-not-allowed items-center gap-3 rounded-xl px-4 py-3 text-slate-600"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}

      <div className="mt-auto border-t border-slate-800 pt-6">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800">
          <Settings size={20} />
          <span>Settings</span>
        </button>

      </div>

    </aside>
  );
}