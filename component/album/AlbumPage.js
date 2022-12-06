import React from "react";
import AlbumCard from "./AlbumCard";
import AfroMusic from "../AfroMusic";
// import AlbumCard from "./AlbumCard";

const album = "/images/album.png";
const lead = "/images/lead.png";
const Play = "/images/Play.png";
const musicadd = "/images/musicadd.png";
const Heart = "/images/Heart.png";

function AlbumPage() {
  console.log(AfroMusic)
  const albumbs = AfroMusic.map((track, index) => {
    return (
      <AlbumCard
        key={track.key}
        index={index}
        title={track.title}
        artist={track.subtitle}
        trackImg={track.share.image}
        url={track.hub.actions[1].uri}
        musicCategory={'Single'}
        duration={233000}
        // handleClick={trackPlay}
      />
    );
  });

  return (
    <div className="w-full p-10">
      <div className="flex ">
        <div className="flex">
          <img src={lead} className="rounded-3xl mr-[1.875rem] mb-1" />
        </div>
        <div>
          <div className="pt-40">
            <span className="text[#A4C7C6] text-4xl">Tomorrow’s tunes</span>
            <p className="text[#EFEEE0] text-md album-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
          <div className="w-full text-sm pt-10 flex">
            <button className="text-[#EFEEE0] flex  bg-[#1E1E1E] rounded-full py-2.5 px-4 mr-2.5">
              <span className="pr-3">
                <img src={Play} className="" />
              </span>
              <span className="pl-5">Play all</span>
            </button>

            <button className="text-[#EFEEE0] flex  bg-[#1E1E1E] rounded-full py-2.5 px-4 mr-2.5">
              <span className="pr-3">
                <img src={musicadd} className="" />
              </span>
              <span className="pl-5">Add to collection</span>
            </button>
            <button className="text-[#EFEEE0] flex  bg-[#1E1E1E] rounded-full py-2.5 px-4 mr-2.5">
              <span className="pr-3">
                <img src={Heart} className="" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  mt-2">{albumbs}</div>
    </div>
  );
}

export default AlbumPage;
