import React from "react";
import songs from "../Songs";
console.log(songs);

function Collections() {
  return (
    <div>
      <div className="w-full text-sm pb-24 ">
        <button className="text-[#1D2123]  bg-[#FACD66] rounded-full py-2.5 px-4 mr-2.5">
          My Collection
        </button>
        <button className="text-[#EFEEE0] border border-[#EFEEE0] rounded-full py-2.5 px-4 opacity-25">
          likes
        </button>

        <div className="flex flex-wrap gap-6 mt-6">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className=" text-white   shrink-0 w-[153px] mr-[30px]">
              {/* <img src={list.track.album.images[0].url} /> */}
              <div className="collection-artist pl-3">
                <p className="mb-1 w-full  text-xl text-[#efeee0]">
                  {list.track.artists[0].name}
                </p>
                {/* <p className="text-[#EFEEE0] opacity-60">{list.track.album.name}</p> */}
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
