import React from "react";
const Eric = "/images/Eric.png";
const Vector = "/images/Vector.png";
const likes = "/images/likes.png";
// import { BsHeart } from "react-icons/bs";

function Main({}) {
  return (
    <>
      <div className="w-full m">
        <div className="">
          <div className="w-full overflow-hidden pt-10 pb-5  ">
            <div className="flex flex-col lg:flex-row mb-10">
              <div className="bg-[#609EAF] h-[70vh] max-h-[503px] w-full shadow-lg max-w-[686px]: md:h-[373px] relative rounded-[40px] flex  text-white lg:mr-6 overflow-hidden ">
                <img
                  src={Vector}
                  className="absolute -right-36 -top-20 md:right-0 md:top-0 rotate-90 md:rotate-0"
                />
                <div className="h-full flex flex-col lg:justify-between py-[38px] px-8 lg:px-[45px] z-10">
                  <span className="mb-auto lg:mb-0">Curated playlist</span>

                  <div className="mb-11 w-full">
                    <h2 className="text-4xl font-bold leading-[120%] text-white w-full">
                      R & B Hits
                    </h2>
                    <p className="w-full max-w-[17.25rem] text-sm leading-[120%]">
                      All mine, Lie again, Petty call me everyday, Out of time,
                      No love, Bad habit, and so much more
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="-mb-1">
                      {/* <BsHeart className="text-red-500" /> */}
                      <img src={likes} alt="" />
                    </div>

                    {/* <span className="text-xl pl-3 lg:text-sm">33k likes</span> */}
                  </div>
                </div>
                <img
                  src={Eric}
                  alt="hero-image"
                  className="z-10 ml-auto hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
