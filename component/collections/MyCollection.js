import React, { useState, useContext } from "react";
import AfroMusic from "../AfroMusic";
import TopChart from "../TopChart";
import CollectionCard from "./CollectionCard";
import { MusicContext } from "../MusicContext";

function MyCollection() {
  const { playerDetail, setPlayerDetail } = useContext(MusicContext);
  console.log({ playerDetail });

  const handleClick = (boboyen) => {
    setPlayerDetail(boboyen);
    console.log("working");
  };

  const collections = AfroMusic.map((track, index) => {
    return (
      <CollectionCard
        key={track.key}
        index={index}
        title={track.title}
        artist={track.subtitle}
        trackImg={track.share.image}
        url={track.hub.actions[1].uri}
        // handleClick={trackPlay}
        onClick={() => handleClick(track)}
      />
    );
  });
  return (
    <div>
      <div className="w-full text-sm pb-24 ">
        <button className="text-primary-dark bg-primary-yellow rounded-full py-2.5 px-4 mr-2.5">
          My Collection
        </button>
        <button className="text-[#EFEEE0] border border-[#EFEEE0] rounded-full py-2.5 px-4 opacity-25">
          My Collection
        </button>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-content-end mt-6"> */}
        <div className="flex flex-wrap gap-6 mt-6">{collections}</div>
      </div>
    </div>
  );
}

export default MyCollection;
