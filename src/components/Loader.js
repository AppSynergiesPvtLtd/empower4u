const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-12 h-12">
        <div
          className="absolute bg-[#aa8d6d] h-6 w-0 left-1/2 transform -translate-x-1/2 top-0 animate-splitX"
        ></div>
        <div
          className="absolute bg-[#aa8d6d] h-6 w-12 left-0 bottom-0 animate-moveY"
        ></div>
      </div>
    </div>
  );
};



export default Loader;
