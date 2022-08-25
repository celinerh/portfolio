const Heading = ({ title, className }) => {
  return (
    <h1 className={`relative inline-block mb-10 font-AbhayaLibre ${className}`}>
      {title}
      <span className="absolute w-3/5 h-2/5 bottom-1 -left-1 -z-10 bg-amber-100"></span>
    </h1>
  );
};

export default Heading;
