const ProjectCard = ({ href, title, imageSource, imageAlt, text }) => {
  return (
    <a
      href={href}
      className="flex flex-col items-center gap-4 p-10 cursor-pointer bg-gray-50 hover:bg-gray-100"
    >
      <h2 className="">{title}</h2>
      <img
        src={imageSource}
        alt={imageAlt}
        title={imageAlt}
        className="w-full"
      />
      <p className="text-sm">{text}</p>
    </a>
  );
};

export default ProjectCard;
