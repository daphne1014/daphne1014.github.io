import TransparentBadge from "../Badges/TransparentBadge";

interface ProjectCardProps {
  project: {
    name: string;
    height: string;
    description: string;
    bgImage: string;
    link: string | null;
    technologies: string[];
    github: string | null;
  };
  onClick: () => void;
}

export default function ProjectCard({project, onClick}: ProjectCardProps
) {
  return (
    <div
      className={`w-full ${project.height} ${project.bgImage} bg-cover bg-no-repeat rounded-lg overflow-hidden shadow-md hover:cursor-pointer`}  onClick={onClick}
    >
      <div className="flex flex-col justify-end w-full h-full px-6 py-4 shadow-inset-bottom-xl bg-gradient-to-b from-transparent via-10% via-light-shadow-black to-dark-shadow-black to-80% text-white opacity-0 hover:opacity-100 transform translate-y-10 hover:translate-y-0 transition-all duration-500 ease-in-out gap-2">
        <h2 className="text-2xl font-semibold y-[-10%]">{project.name}</h2>
        <p className="text-sm font-semibold leading-tight">
          {project.description}
        </p>
        <div className="flex gap-2">
          {project.technologies.map((technology, idx) => (
            <TransparentBadge content={technology} key={idx}/>
          ))}
        </div>
      </div>
    </div>
  );
}
