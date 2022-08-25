const TechnologyCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col gap-3 w-min">
      <div className="flex items-center justify-center w-16 rounded-full bg-gray-50 h-28 md:w-24 md:h-36">
        <span>{icon}</span>
      </div>
      <h2 className="text-xs text-center md:text-base">{title}</h2>
    </div>
  );
};

export default TechnologyCard;
