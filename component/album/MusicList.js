import React from "react";
import songs from "../Songs";
function MusicList({ img, title, artist, url, index }) {

  const handleClick = (e) => {
    playTrack(e, TopMusic)
}  
  console.log(songs.playlist);
  return (

      <div
        className="text-xs text-white shrink-0 w-[153px] mr-[30px]"
        onClick={handleClick}
        data-id={index}
      >
        <img
          src={img}
          height={153}
          width={153}
          alt={title}
          className="rounded-3xl mr-[1.875rem] mb-1"
        />
        <p className="mb-1 w-full truncate">{title}</p>
        <p>{artist}</p>
      </div>
    
  );
}

export default MusicList;
