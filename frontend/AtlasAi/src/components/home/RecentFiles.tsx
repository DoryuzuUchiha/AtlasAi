import Card from "../common/Card";

const files = [
  "atlas-roadmap.md",
  "notes.md",
];

export default function RecentFiles() {
  return (
    <Card title="Recent Files">
      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file}
            className="rounded-lg bg-slate-900 px-4 py-3 hover:bg-slate-800 transition"
          >
            📄 {file}
          </div>
        ))}
      </div>
    </Card>
  );
}