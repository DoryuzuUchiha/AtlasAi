import { FolderKanban, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  lastOpened: string;
};

export default function ProjectCard({
  title,
  description,
  lastOpened,
}: ProjectCardProps) {
  return (
    <Link
      to="/workspace"
      className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-blue-500 hover:bg-slate-800"
    >
      <FolderKanban
        size={34}
        className="mb-5 text-blue-400"
      />

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-3 text-sm text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="text-xs text-slate-500">
          Last opened {lastOpened}
        </span>

        <ArrowRight
          className="transition-transform group-hover:translate-x-1"
        />

      </div>
    </Link>
  );
}