import React from "react";
const Frame = "/images/Frame.png";
const Eric = "/images/Eric.png";
const Vector = "/images/Vector.png";
function PlaylistCard() {
  return (
    <div className="w-full overflow-hidden pb-20">
      <div className="flex flex-col lg:flex-row mb-10">
        <div className="bg-[#609EAF] h-[70vh] max-h-[503px] max-w-[586px]: md:h-[373px] lg:w-2/3 relative rounded-[40px] flex  text-white lg:mr-6 overflow-hidden shadow-[0_15px_22px_-20px_rgba(122,144,150,1)]">
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
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
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
  );
}

export default PlaylistCard;
