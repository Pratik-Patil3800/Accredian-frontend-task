import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const CTA_refer = () => {
  const [cta, setCta] = useState(false);
  const handleClickOpenRcb = () => {
    setCta(true);
  };
  const RcbhandleClose = () => {
    setCta(false);
  };
  return (
    <div
      id="supportSection"
      className="flex justify-center w-full py-8 md:py-12 xl:px-12 px-4"
    >
      <div className="border border-[#1A73E8] shadow-2xl w-full max-w-[85rem] py-8 md:py-16 md:px-12 px-6 bg-[#1A73E8] rounded-xl flex items-center md:justify-between md:flex-row flex-col gap-6"
      style={{
        backgroundImage: `url('/gac.svg')`,
        backgroundPosition: '80% 5%',
        backgroundSize: '700px 700px',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div className="flex gap-8 md:flex-row flex-col md:items-start items-center">
          <div className="w-20 h-20 flex-shrink-0 bg-slate-200/35 rounded-xl p-1">
            <div className="w-full h-full bg-white rounded-xl p-2">
              <RiCustomerService2Fill className="w-full h-full text-[#1A73E8]" />
            </div>
          </div>
          <div className="md:text-start text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-white font-circular">
              Want to deleve deeper into the program?
            </h1>
            <h4 className="text-base md:text-lg mt-2 max-w-xl font-medium text-neutral-100 font-circular">
            Share your details to receive expert insights from our program team!
            </h4>
          </div>
        </div>
        <button
          onClick={handleClickOpenRcb}
          className=" w-full max-w-[200px] px-4 py-3 mt-4 rounded-lg text-blue-500 bg-white text-xl font-semibold flex items-center justify-center gap-1 font-circular"
        >
          Get in touch
          <IoIosArrowForward />
        </button>
      </div>
     
    </div>
  );
};

export default CTA_refer;
