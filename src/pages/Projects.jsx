import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      href: "https://www.google.com",
      title: "Projekt 1",
      imageSource: "https://picsum.photos/id/1/300/200",
      imageAlt: "Projekt 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
      href: "https://www.google.com",
      title: "Projekt 2",
      imageSource: "https://picsum.photos/id/1/300/200",
      imageAlt: "Projekt 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
      href: "https://www.google.com",
      title: "Projekt 3",
      imageSource: "https://picsum.photos/id/1/300/200",
      imageAlt: "Projekt 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
  ];

  return (
    <div className="mx-6 xs:mx-12 sm:mx-16 md:mx-20 lg:mx-24 ">
      <Heading title="Projekter" className="text-3xl md:text-5xl" />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            href={project.href}
            title={project.title}
            imageSource={project.imageSource}
            imageAlt={project.imageAlt}
            text={project.text}
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
