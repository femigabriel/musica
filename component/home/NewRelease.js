import React from "react";
import songs from "../Songs";
import Link from "next/link";
import ChatList from "./ChatList";
import MusicList from "../album/MusicList";
import TopChart from "../TopChart";
import AfroMusic from "../AfroMusic";

// const album2 = "/images/album2.png";
// const album3 = "/images/album3.png";
// const album4 = "/images/album4.png";
// const album5 = "/images/album5.png";
// const album6 = "/images/album6.png";
// const album7 = "/images/album7.png";

function NewRelease() {
  console.log(TopChart);

  const newRelease = AfroMusic.map((track, index) => {
    if (index < 10) {
      return (
        <MusicList
          key={track.key}
          index={index}
          img={track.share.image}
          title={track.title}
          artist={track.subtitle}
          url={track.hub.actions[1].uri}
        />
      );
    }
  });

  const popular = AfroMusic.map((track, index) => {
    if (index >= 10 && index <= 20) {
      return (
        <MusicList
          key={track.key}
          index={index}
          img={track.share.image}
          title={track.title}
          artist={track.subtitle}
          url={track.hub.actions[1].uri}
        />
      );
    }
  });

  return (
    <div className="pl-40 new-release new-release-mobile">
      <div>
        <h3 className="text-2xl font-bold mb-3 text-white">New releases</h3>
      </div>
      <div>
        <ChatList>{newRelease}</ChatList>
      </div>

      <div className="pt-10">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-white">
            Popular in your area
          </h3>
        </div>
        <div className="flex outer-wrapper pb-5"></div>
        <div>
          <ChatList>{popular}</ChatList>
        </div>
      </div>
    </div>
  );
}

export default NewRelease;
