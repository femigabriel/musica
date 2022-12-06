import React from "react";
import { BsShuffle } from "react-icons/bs";
import { RiRepeatOneFill } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";


function Controls({ play, isPlaying, duration, currentTime }) {
  function secondsToHms(seconds) {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min == 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }
  return (
    <div className="control-panel">
      <div className="timer">{secondsToHms(currentTime)}</div>
      <div className="flex items-center justify-center md:mb-8">
        <button>
          <BsShuffle className="mr-20 w-[15px] h-[15px] pointer" />
        </button>
        <button>
          <AiFillStepBackward className="mr-2 w-[15px] h-[15px] pointer" />
        </button>

        <div className="mr-2 w-[30px] h-[30px] bg-[#FACD66] rounded-full cursor shadow-2xl">
          <button>
            <FiPlay
              onClick={play}
              className="ml-2.5 mt-2.5 w-[15px] h-[15px] text-xl pointer "
              play={play}
              isPlaying={isPlaying}
            />
          </button>
        </div>

        <button>
          <AiFillStepForward className="mr-2 w-[15px] h-[15px] pointer" />
        </button>
        <button>
          <RiRepeatOneFill className="ml-11 mr-2 w-[15px] h-[15px] pointer" />
        </button>
      </div>

      <div className="timer">{secondsToHms(duration)}</div>
    </div>
  );
}

export default Controls;
