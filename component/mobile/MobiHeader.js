import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { Input } from "antd";
const logo = "/images/logo.png";
import { MenuOutlined } from "@ant-design/icons";
const HomeM = "/images/HomeM.png";
const playlist = "/images/playlist.png";
const radio = "/images/radio.png";
const videos = "/images/videos.png";
const profile = "/images/profile.png";
const Logout = "/images/Logout.png";
import Link from "next/link";

function MobiHeader() {
  const { Search } = Input;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header p-10">
      <div className="flex ">
        <div className="flex">
          <div>
            <MenuOutlined onClick={showDrawer} className="pr-5" />
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={open}
              style={{ background: "black" }}
            >
              <div className="">
                <p className="flex p-5">
                  <Link href="/">
                    <img src={HomeM} className="pr-5" alt="" />
                  </Link>
                  Home
                </p>
                <p className="flex p-5">
                  <Link href="/">
                    <img src={playlist} className="pr-5" alt="" />
                  </Link>
                  My collections
                </p>
                <p className="flex p-5">
                  <Link href="/">
                    <img src={radio} className="pr-5" alt="" />
                  </Link>
                  Radio
                </p>
                <p className="flex p-5">
                  <Link href="/">
                    <img src={videos} className="pr-5" alt="" />
                  </Link>
                  Music videos
                </p>
                <p className="flex p-5">
                  <Link href="/">
                    <img src={profile} className="pr-5" alt="" />
                  </Link>
                  Profile
                </p>
                <p className="flex p-5">
                  <Link href="/">
                    <img src={Logout} className="pr-5" alt="" />
                  </Link>
                  Log out
                </p>
              </div>
            </Drawer>
          </div>

          <div className="pr-10 pt-2">
            <img src={logo} className=" " alt="Chart" />
          </div>
        </div>

        <Search
          placeholder="Search artists"
          onSearch={(value) => console.log(value)}
          className="rounded-sm search"
        />
      </div>
    </div>
  );
}

export default MobiHeader;
