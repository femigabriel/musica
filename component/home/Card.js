import React from "react";
import Link from "next/link";
const Heart = "/images/Heart.svg";


function Card({ img, title, artist, length }) {
  return (
    
      <div className="shrink-0 mr-4 w-3/4 lg:w-full">
        <div
          className="p-4 bg-dark-alt flex flex-col lg:flex-row  rounded-3xl mb-3 relative"
          //   onClick={handleClick}
        >
          <img
            src={img}
            className="w-[6.75rem] lg:h-[16] lg:w-16 rounded-xl mr-3 mb-4 lg:mb-0"
            alt="music image"
          />

          <div>
            <h4 className="text-[17px]  leading-5 text-white">{title}</h4>
            <span className="text-xs text-secondary-grey">{artist}</span>
            <p className="text-xs text-white mt-6 lg:mt-1">{length}</p>
          </div>

          <div className="h-10 w-10 rounded-full border border-white/[0.11] absolute right-4 top-4 flex item-center justify-center lg:relative lg:ml-auto">
            <img src={Heart} height={18} width={18} alt="favorite" />
          </div>
        </div>
      </div>

  );
}

export default Card;
