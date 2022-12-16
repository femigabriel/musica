import React, { useContext, useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [playerDetail, setPlayerDetail] = useState({
    cover:
      "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ff/ee/a8/ffeea8ba-38af-138f-045f-013bf8072cb2/194690959790_cover.jpg/400x400cc.jpg",
    title: "Cough (Odo)",
    duration: "",
    artist: "EMPIRE & Kizz Daniel",
  });
  const [playerSrc, setPlayerSrc] = useState(
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cd/13/2d/cd132d9a-2449-65fe-e094-fb927d7c6c9e/mzaf_16088994795328198867.plus.aac.ep.m4a"
  );
}

// import React, { useContext, useEffect, useState } from "react";
// import { AfroMusic } from "../component/AfroMusic";

// const Context = React.createContext();

// function ContextProvider(props) {
//   const [playlistBG, setPlaylistBG] = useState();
//   const [playerSrc, setPlayerSrc] = useState(
//     "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cd/13/2d/cd132d9a-2449-65fe-e094-fb927d7c6c9e/mzaf_16088994795328198867.plus.aac.ep.m4a"
//   );
//   const [audioPlayer, setAudioPlayer] = useState(
//     document.createElement("audio")
//   );
//   const [playerDetail, setPlayerDetail] = useState({
//     cover:
//       "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/ff/ee/a8/ffeea8ba-38af-138f-045f-013bf8072cb2/194690959790_cover.jpg/400x400cc.jpg",
//     title: "Cough (Odo)",
//     duration: "",
//     artist: "EMPIRE & Kizz Daniel",
//   });
//   const [musicDuration, setMusicDuration] = useState("");
//   const [currentTime, setCurrentTime] = useState(0);
//   const [tracksQueue, setTracksQueue] = useState(AfroMusic);
//   const [trackIndex, setTrackIndex] = useState(22);
//   const [isShuffle, setIsShuffle] = useState(false);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     // set the audioplayer globally
//     setAudioPlayer(document.querySelector("#audio-player"));
//   }, []);

//   // Play track with corresponding Index
//   useEffect(() => {
//     setCurrentTrack(trackIndex);
//   }, [trackIndex]);

//   function continuePlay() {
//     audioPlayer.play();
//   }

//   function millisecondsToMinute(milliseconds) {
//     const second = Math.floor(milliseconds / 1000);
//     const minute = Math.floor(second / 60);
//     const seconds = Math.floor(second % 60);
//     return `${minute.toString().padStart(2, "0")} : ${seconds
//       .toString()
//       .padStart(2, "0")}`;
//   }

//   return (
//     <Context.Provider value={{ artistDetails, musicSrc }}>
//       value=
//       {{
//         millisecondsToMinute,
//         togglePlay,
//         setCurrentTrack,
//         continuePlay,
//         setTracksQueue,
//         setTrackIndex,
//         nextTrack,
//         prevTrack,
//         setIsShuffle,
//         setPlayerSrc,
//         setPlayerDetail,
//         setSearch,
//         playTrack,
//       }}
//       {props.children}
//     </Context.Provider>
//   );
// }

// export { Context, ContextProvider };
