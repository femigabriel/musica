import React, { useContext } from "react";
import Head from "next/head";
import Header from "../component/home/Header";
import SideBar from "../component/home/SideBar";
import AudioPlayer from "../component/home/AudioPlayer";
import MyCollection from "../component/collections/MyCollection";
import { MusicContext } from "../component/MusicContext";

function collections() {
  return (
    <div>
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700"
          />
        </Head>
      </>
      <>
        <div className="pl-10 pr-10 p-5 w-full">
          <div className="">
            <Header />
            <div className="flex pt-10 w-screen">
              <SideBar />
              <MyCollection />
            </div>
            <AudioPlayer />
          </div>
        </div>
      </>
    </div>
  );
}

export default collections;
