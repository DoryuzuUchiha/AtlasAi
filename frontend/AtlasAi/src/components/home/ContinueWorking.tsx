import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

export default function ContinueWorking() {
  return (
    <Card title="Continue Working">
      <Link
        to="/workspace"
        className="group block rounded-xl border border-slate-800 bg-slate-900 p-5 transition-all duration-200 hover:border-blue-500 hover:bg-slate-800"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Atlas Development
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Personal AI Operating System
            </p>

            <p className="mt-4 text-xs text-slate-500">
              Continue building Atlas
            </p>
          </div>

          <ArrowRight
            size={22}
            className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>
      </Link>
    </Card>
  );
}