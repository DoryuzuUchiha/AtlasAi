import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

export default function Card({
  title,
  children,
}: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      {title && (
        <h2 className="mb-5 text-xl font-semibold">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}