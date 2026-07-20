import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950 px-10 py-8">

      <h1 className="mb-2 text-4xl font-bold text-white">
        Projects
      </h1>

      <p className="mb-8 text-slate-400">
        Continue an existing project or start something new.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <ProjectCard
          title="Atlas Development"
          description="Building your personal AI operating system."
          lastOpened="Today"
        />

      </div>

    </div>
  );
}