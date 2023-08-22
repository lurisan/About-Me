const Work = () => {
  return (
    <div className="bg-black-1 flex flex-col lg:flex-row-reverse h-screen max-w-full p-4 mx-auto justify-center lg:justify-end" >
      <div className="mr-10 lg:items-center lg:ml-80 lg:flex">
        <span className="text-4xl font-bold text-end lg:block lg:text-5xl">
          <p className="text-white-1">
            Software Engineer
          </p>
          <p className="text-red mt-5">
            TCS
          </p>
          <div className="flex justify-end -mr-3">
            <button className="border-2 rounded-full p-2 pl-3 pr-3 mt-10 bg-white-1 text-2xl hover:text-white-1 hover:bg-red">
              Know More
            </button>
          </div>
        </span>
      </div>
      <div className="mt-10 lg:items-center lg:flex lg:mt-0 lg:ml-56">
        <img alt="v3 design pic" src="../assets/stickers/work.png"  height="500px" width="500px" />
      </div>
    </div >
  );
};

export default Work;
