import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
const strokeheart = "/images/strokeheart.svg";
const Heart = "/images/Heart.png";

function AlbumCard({ artist, onClick, trackImg, duration, musicCategory }) {
  return (
    <div onClick={onClick} className=" ">
      <div className="list  flex justify-between items-center cursor-pointer p-5  backdrop-blur-sm bg-[rgb(51,55,59,0.37)] rounded-[15px] py-2 px-2.5 lg:pr-8  text-xs mb-2.5">
        <div className="flex">
          <div className="flex">
            <img
              src={trackImg}
              className="rounded-2xl h-[53px]  w-[53px] md:h-12 md:w-12 mr-3 font-bold"
            />
            <img src={strokeheart} className="w-[15px] h-[14px] mt-4 ml-3" />
          </div>
        </div>
        <div>
          <p className="text-[10px] color-[#EFEEE0] opacity-75 truncate">
            {artist}
          </p>
        </div>
        <div>
          <p className="text-[10px] color-[#EFEEE0] opacity-75 truncate">
            {musicCategory}
          </p>
        </div>
        <div>
          <p className="text-[10px] color-[#EFEEE0] opacity-75 truncate">
            {duration}
          </p>
        </div>
        <div>
          <MoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
