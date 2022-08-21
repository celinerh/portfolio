const TechnologyCard = ({ title, icon }) => {
  return (
    <div className="w-min flex flex-col gap-3">
      <div className="w-24 h-36 bg-gray-50 rounded-full flex justify-center items-center">
        <span className="">{icon}</span>
      </div>
      <h2 className="text-center">{title}</h2>
    </div>
  );
};

export default TechnologyCard;
