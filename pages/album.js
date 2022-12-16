import React, {useContext} from "react";
import Head from "next/head";
import Header from "../component/home/Header";
import SideBar from "../component/home/SideBar";
import AlbumPage from "../component/album/AlbumPage";
const albumbc = "/images/albumbc.png";
import {MusicContext} from "../component/MusicContext";



function album() {
  const msg = useContext(MusicContext);

  return (
    <div
      className="w-full p-10"
      style={{ backgroundImage: `url(${albumbc})`, width: "100%" }}
    >
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
          {/* <span>{msg}</span> */}
            <Header />
            <div className="flex pt-10 w-screen">
              <SideBar />
              <AlbumPage />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default album;
