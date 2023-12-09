import React from "react";

const Socials = () => {
  return (
    <div className="bg-black-1 flex flex-col lg:flex-row-reverse h-screen max-w-full p-4 mx-auto justify-center lg:justify-end" >
      <div className="mr-10 lg:items-center lg:ml-80 lg:flex">
        <div className="text-4xl font-bold text-end lg:block lg:text-5xl">
          <div>
            <p className="text-white-1">
              Connect With Me
            </p>
            <p className="text-red mt-5">              
            <React.Fragment>
                <a href="mailto:contact@lurisan.in">Email</a>
              </React.Fragment>
            </p>
          </div>
          <div className="mt-20">
            <p className="text-white-1">
              Follow Me
            </p>
            <p className="text-red mt-5">
              <React.Fragment>
                <a href="http://bio.lurisan.in">Socials</a>
              </React.Fragment>
            </p>
          </div>
          <div className="mt-20">
            <p className="text-white-1">
              Search For Me
            </p>
            <p className="text-red mt-5">
              @mdnasirulhaque
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:items-end lg:flex lg:mt-0">
        <img alt="v3 design pic" src="../assets/stickers/socials.png" className=" h-[350px] lg:h-[600px]" />
      </div>
    </div >
  );
};

export default Socials;
