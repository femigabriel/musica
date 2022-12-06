import React, { useState, useEffect } from "react";
import Player from "../Player";

function musicPlayer() {
  const [songs] = useState([
    {
      title: "He save me",
      artist: "R.Kelly",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/30/af/0a/30af0a99-a18b-b87e-a656-25ee669072f0/mzaf_3274913731307180121.plus.aac.ep.m4a",
      images: "/images/raggae.png",
    },
    {
      title: "Unbreakable",
      artist: "Rihanna",
      uri: "https://music.apple.com/gb/album/xtra-cool-refix-special-version/1649776295?i=1649776296&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
      images: "/images/goldenage.png",
    },

    {
      title: "Hello",
      artist: "Beyonce",
      uri: "https://music.apple.com/gb/album/never-in-my-life/1644915536?i=1644915538&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
      images: "",
    },
    {
      title: "",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/14/ca/1e/14ca1edc-1958-fca6-83cb-174931183aa2/mzaf_10806040960071313745.plus.aac.p.m4a",
      images: "",
    },
    {
      title: "HAlways on time",
      artist: "Ja rule",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/14/ca/1e/14ca1edc-1958-fca6-83cb-174931183aa2/mzaf_10806040960071313745.plus.aac.p.m4a",
      images: "",
    },
    {
      title: "& days",
      artist: "Craig David",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/14/ca/1e/14ca1edc-1958-fca6-83cb-174931183aa2/mzaf_10806040960071313745.plus.aac.p.m4a",
      images: "",
    },
    {
      title: "Don't break my heart",
      artist: "Mary J.",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/14/ca/1e/14ca1edc-1958-fca6-83cb-174931183aa2/mzaf_10806040960071313745.plus.aac.p.m4a",
      images: "",
    },
    {
      title: "Hero",
      artist: "Maria Carey",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/18/e9/91/18e991ca-aee5-7838-e46b-dec0dafc93df/mzaf_18366566180670913707.plus.aac.ep.m4a",
      images: "",
    },
    {
      title: "Sent frm heaven",
      artist: "Angelie cole",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/82/d8/aa/82d8aa2a-cd7a-f7a9-44a6-72bd53146f00/mzaf_17788274701149353680.plus.aac.ep.m4a",
      images: "",
    },
    {
      title: "What a wonderful world",
      artist: "John Eliot",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1e/e1/5d/1ee15d60-b22d-b250-4bc3-228bb2cb64f1/mzaf_15036207979181990971.plus.aac.ep.m4a",
      images: "",
    },
    {
      title: "I call it Love",
      artist: "John Legend",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/14/ca/1e/14ca1edc-1958-fca6-83cb-174931183aa2/mzaf_10806040960071313745.plus.aac.p.m4a",
      images: "",
    },
    {
      title: "911",
      artist: "Wyclef Jean",
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/8d/23/91/8d239111-ba15-ee09-fbb9-e87d10067f64/mzaf_15149033298113158645.plus.aac.p.m4a",
      images: "",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.lenth - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  const [percentage, setPercentage] = useState(0);

  const onChange = (e) => {
    setPercentage(e.target.value);
  };
  return (
    <>
      <Player
        // currentSongIndex={currentSongIndex}
        // setCurrentSongIndex={setCurrentSongIndex}
        // nextSongIndex={nextSongIndex}
        // songs={songs}
        // song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]}

        onChange={onChange}
        percentage={percentage}
      />
    </>
  );
}

export default musicPlayer;

{
  /* <audio
          className="w-full outline-none cursor-pointer"
          src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/30/af/0a/30af0a99-a18b-b87e-a656-25ee669072f0/mzaf_3274913731307180121.plus.aac.ep.m4a"
          // src=""
          type="audio/mp3"
          controls
        /> */
}
