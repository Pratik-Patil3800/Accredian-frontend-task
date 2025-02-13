import React, { useState } from "react";
import ReferModal from "./referalformmodal";
import "../assets/hero.css"

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div
      id="referHero"
      className="flex justify-center items-center my-4 md:mt-8 xl:px-12 px-4"
    >
      <div>
        <div className=" hero rounded-lg md:rounded-3xl bg-blue-50 flex flex-col md:flex-row items-center justify-center mb-1 md:mb-10 md:justify-between gap-0 sm:gap-4 md:gap-8 lg:gap-12 px-0 pb-4 md:p-4 overflow-visible">
          <div className="flex flex-col justify-center items-center md:items-start gap-2 md:gap-6 lg:gap-10 md:ps-2 lg:ps-8">
            <h1 className="text-center md:text-start cursor-context-menu text-2xl lg:text-6xl xl:text-7xl 2xl:text-[5.2vw] 3xl:text-[5.0rem] font-bold max-w-sm md:max-w-[200px] lg:max-w-[450px] pt-2 capitalize px-8 sm:px-0 font-circular">
              Let's learn & earn
            </h1>
            <p className="font-medium md:font-normal text-sm md:text-xl lg:text-3xl text-gray-800 max-w-[170px] md:max-w-[200px] lg:max-w-[300px] text-center md:text-start font-circular">
              Get a chance to earn {" "}
              <span className="text-blue-600 font-bold text-xl md:text-2xl lg:text-3xl">
                ₹15,000 {" "}
              </span>
              for every friend who enrolls!
            </p>
            <a
              className="text-sm drop-shadow-xl xl:text-base font-medium xl:px-6 xl:py-2 px-5 py-1.5 bg-blue-600 text-white hover:bg-blue-800 border border-blue-600 rounded-[4px] capitalize cursor-pointer font-circular"
              onClick={handleModalOpen}
            >
              Refer now
            </a>
          </div>
          <div className="md:py-0 py-12 md:flex hidden justify-center ">
            <div className="relative hidden md:block w-full sm:w-[70%] md:w-[40vw] lg:w-[45vw] 3xl:w-[42rem]"></div>
          </div>
        </div>
      </div>
      <ReferModal isOpen={modalOpen} onClose={setModalOpen} />
    </div>
  );
};

export default Hero;
