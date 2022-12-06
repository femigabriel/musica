import React from "react";

function PlayerDetails(props) {
  return (
    <div className="">
      <>
        <img
          src={props.song.images}
          alt=""
          className="rounded-2xl h-[65px]  w-[65px] mr-3 font-bold"
        />
      </>

      <div className="text-white truncate">
        <p className="text-sm ">{props.song.title}</p>
        <span className="text-[10px] text-white/[0.44]">
          {props.song.artist}
        </span>
      </div>
    </div>
  );
}

export default PlayerDetails;
