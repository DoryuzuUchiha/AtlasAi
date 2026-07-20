import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8">

      <Link
        to="/"
        className="text-xl font-bold tracking-wide hover:text-blue-400 transition-colors"
      >
        ATLAS
      </Link>

      <div className="text-slate-400">
        Diego
      </div>

    </header>
  );
}