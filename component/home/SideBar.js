import React from "react";
const HomeM = "/images/HomeM.png";
const playlist = "/images/playlist.png";
const radio = "/images/radio.png";
const videos = "/images/videos.png";
const profile = "/images/profile.png";
const Logout = "/images/Logout.png";
import Link from "next/link";

function SideBar() {
  return (
    <div className="mr-6 hidden lg:block">
      <div className="bg-dark-alt rounded-[2rem] px-4 py-7 mb-5">
        <div className="side-bar">
          <Link href="/">
            <img src={HomeM} className="side-icon pb-10 pl-5 pt-5" alt="" />
          </Link>
          <Link href="/album">
            <img src={playlist} className=" side-icon pb-10 pl-5" alt="" />
          </Link>
          <Link href="/collections">
            <img src={radio} className=" side-icon pb-10 pl-5" alt="" />
          </Link>

          <Link href="/">
            <img src={videos} className="side-icon  pb-10 pl-5" alt="" />
          </Link>
        </div>
      </div>
      <div className="bg-dark-alt rounded-[2rem] px-4 py-7 mb-5">
        <div className="side-bar-2 pt-5">
          <Link href="/">
            <img src={profile} className=" side-icon pb-10 pl-5" alt="" />
          </Link>

          <Link href="/">
            <img src={Logout} className="side-icon  pb-10 pl-5" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
