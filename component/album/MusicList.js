import React, {useContext} from "react";
import songs from "../Songs";
import AfroMusic from "../AfriSongs";
import { MusicContext } from "../MusicContext";
function MusicList({ img, title, artist, url, index }) {
  const {playTrack} = useContext(MusicContext)


  const handleClick = (e) => {
    playTrack(e, AfroMusic)
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
