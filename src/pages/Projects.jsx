import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      href: "https://www.google.com",
      title: "Test",
      imageSource: "https://picsum.photos/id/1/200/300",
      imageAlt: "Test",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
      href: "https://www.google.com",
      title: "Test",
      imageSource: "https://picsum.photos/id/1/200/300",
      imageAlt: "Test",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
      href: "https://www.google.com",
      title: "Test",
      imageSource: "https://picsum.photos/id/1/200/300",
      imageAlt: "Test",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
  ];

  return (
    <div className="mx-24">
      <Heading title="Projekter" />
      <div className="grid grid-cols-3 gap-10">
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
