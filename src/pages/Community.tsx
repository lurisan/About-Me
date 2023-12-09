import React from "react";

const Community = () => {
  return (
    <div className="bg-black-1 flex flex-col lg:flex-row-reverse h-screen max-w-full p-4 mx-auto justify-center lg:justify-end" >
      <div className="mr-10 lg:items-center lg:ml-80 lg:flex">
        <div className="text-4xl font-bold text-end lg:block lg:text-5xl">
          <div>
            <p className="text-white-1">
              Co-Organizer
            </p>
            <p className="text-red mt-5">
              <React.Fragment>
                <a className="shine" href="https://gdg.community.dev/gdg-cloud-kolkata/">GDG Cloud Kolkata</a>
              </React.Fragment>
            </p>
          </div>
          <div className="mt-20">
            <p className="text-white-1">
              Organizer
            </p>
            <p className="text-red mt-5">              
            <React.Fragment>
                <a className="shine" href="https://t.me/hyperdrivehd">HyperDrive</a>
              </React.Fragment>
            </p>
          </div>
          {/* <div className="flex justify-end -mr-3">
            <button className="border-2 rounded-full p-2 pl-3 pr-3 mt-10 bg-white-1 text-2xl hover:text-white-1 hover:bg-red">
              Know More
            </button>
          </div> */}
        </div>
      </div>
      <div className="mt-10 lg:items-end lg:flex lg:mt-0 lg:ml-56">
        <img alt="community sticker" src="../assets/stickers/community.png" className=" h-[400px] lg:h-[600px]" />
      </div>
    </div >
  );
};

export default Community;
