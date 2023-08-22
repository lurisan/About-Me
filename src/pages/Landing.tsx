const Landing = () => {
  return (
    <div className="bg-black-1 flex flex-col lg:flex-row-reverse h-screen max-w-full p-4 mx-auto justify-center lg:justify-end" >
      <div className="mr-10 lg:items-center lg:ml-80 lg:flex">
        <span className="text-5xl font-bold text-end lg:block lg:text-7xl">
          <p className="text-white-1">
            Hi
          </p>
          <p className="text-red">
            I am
          </p>
          <p className="text-red">
            <div id="flip">
              <div><div>Developer</div></div>
              <div><div>Roboticist</div></div>
              <div><div>Mentor</div></div>
            </div>
          </p>
        </span>
      </div>
      <div className="mt-10 lg:items-end lg:flex lg:mt-0 lg:ml-56">
        <img alt="v3 design pic" src="../assets/stickers/landing.png"  height="500px" width="500px" />
      </div>
    </div >
  );
};

export default Landing;
