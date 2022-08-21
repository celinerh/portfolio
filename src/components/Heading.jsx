const Heading = ({ title, width }) => {
  return (
    <h1 className="relative text-5xl font-AbhayaLibre inline-block mb-6 mt-10">
      {title}
      <span className="absolute bottom-1 -left-1 -z-10 w-3/5 h-5 bg-amber-100"></span>
    </h1>
  );
};

export default Heading;
