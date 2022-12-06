import React from "react";
import { MoreOutlined } from "@ant-design/icons";
function AlbumCard({ title, artist, trackImg, handleClick, index, duration,musicCategory }) {
  return (
    <div className=" ">
      <div className="list  flex justify-between items-center cursor-pointer p-5  backdrop-blur-sm bg-[rgb(51,55,59,0.37)] rounded-[15px] py-2 px-2.5 lg:pr-8  text-xs mb-2.5">
        <div className="flex">
          <img
            src={trackImg}
            className="h-[50px] w-full lg:w-[50px] absolute top-0 left-0 transition-transform"
          />
          
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
