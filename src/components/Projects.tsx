import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectsCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Sunt consectetur duis sint incididunt enim dolore mollit officia sunt pariatur et laboris."
        />
        <ProjectsCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Sunt consectetur duis sint incididunt enim dolore mollit officia sunt pariatur et laboris."
        />
        <ProjectsCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Sunt consectetur duis sint incididunt enim dolore mollit officia sunt pariatur et laboris."
        />
      </div>
    </div>
  );
}
