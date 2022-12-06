import React, { useState, useRef, useEffect, useContext } from "react";
import { CiVolumeHigh } from "react-icons/ci";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
const raggae = "/images/raggae.png";
const album7 = "/images/album7.png";
import songs from "./Songs";
// import { Context } from "./Context";
const Context = React.createContext();

function Player() {
  // const {playerSrc, audioPlayer, playerDetail, togglePlay, nextTrack, prevTrack, setIsShuffle, currentTime, musicDuration} = useContext(Context)




  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };
  console.log(songs);
  return (
    <div className="pt-10  audio-player p-5 pb-10">
      <div className="fixed bottom-0 bg-[rgba(29,33,35,0.3)] border-t border-white/[0.1] h-[120px] backdrop-blur-lg py-4 lg:py-6 w-full pl-6 -ml-6 lg:ml-0 z-50">
        {/* {songs.map((list, key) => ( */}
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center w-3/5 md:w-1/5 grow-0">
              <img
                // src={list.track.album.images[0].url}
                className="rounded-2xl h-[53px]  w-[53px] md:h-12 md:w-12 mr-3 font-bold"
              />
              <div className="text-white truncate">
                {/* <p className="text-sm "> {list.track.artists[0].name}</p> */}
                <span className="text-[10px] text-white/[0.44]">
                  {/* {list.track.artists[0].name} */}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:w-3/5 mx-9 grow-0">
              <div className="flex items-center justify-center md:mb-8"></div>
              <ProgressBar onChange={onChange} percentage={percentage} />
              <audio
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => {
                  setDuration(e.currentTarget.duration.toFixed(2));
                }}
                // src={list.track.preview_url}
                // src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/cd/13/2d/cd132d9a-2449-65fe-e094-fb927d7c6c9e/mzaf_16088994795328198867.plus.aac.ep.m4a"
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/30/af/0a/30af0a99-a18b-b87e-a656-25ee669072f0/mzaf_3274913731307180121.plus.aac.ep.m4a"
              ></audio>
              <Controls
                play={play}
                isPlaying={isPlaying}
                duration={duration}
                currentTime={currentTime}
              />
            </div>

            <div className="hidden md:flex items-center w-1/5 grow-0">
              <CiVolumeHigh className="mr-2 mb-1 w-[25px] h-[25px]" />
              <input
                type="range"
                step="0.01"
                className="volume-slider h-1 w-full bg- rounded-full "
              />
              <div>
                {/* <input type="range" className='volume-slider h-1 w-full bg-primary-yellow rounded-full' /> */}
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default Player;

{
  /* <div className=" md:block h-1 bg-white/[0.04] w-full rounded relative">
            <input
              type="range"
              className="opacity-0 absolute w-full h-1  hidden md:block"
            />
            <div className="bg-primary-yellow h-full rounded player"></div>
            <div className="h-3 w-3 rounded-full border border-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-0.5">
              <div className="h-full w-full rounded-full bg-primary-yellow shadow-[0_0_8px_rgba(0,0,0,0.92)]"></div>
            </div>
          </div> */
}
