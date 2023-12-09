const Me = () => {
  return (
    <div className="bg-black-1 flex flex-col lg:flex-row-reverse h-screen max-w-full p-4 mx-auto justify-center lg:justify-end" >
      <div className="mr-10 lg:items-center lg:ml-80 lg:flex">
        <span className="text-4xl font-bold text-end lg:block lg:text-5xl">
          <p className="text-white-1">
            BTW, my name is
          </p>
          <p className="text-red mt-5">
            Md Nasirul Haque
          </p>
        </span>
      </div>
      <div className="mt-20 lg:items-end lg:flex lg:mt-0 lg:ml-56">
        <img alt="v3 design pic" src="../assets/stickers/me.png"  height="500px" width="500px" />
      </div>
    </div >
  );
};

export default Me;
