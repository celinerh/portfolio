const ProjectCard = ({ href, title, imageSource, imageAlt, text }) => {
  return (
    <a
      href={href}
      className="bg-gray-50 hover:bg-gray-100 p-10 flex flex-col gap-4 items-center cursor-pointer"
    >
      <h2 className="">{title}</h2>
      <img
        src={imageSource}
        alt={imageAlt}
        title={imageAlt}
        className="w-72 h-36"
      />
      <p className="text-sm">{text}</p>
    </a>
  );
};

export default ProjectCard;
