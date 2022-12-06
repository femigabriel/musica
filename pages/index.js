import Head from "next/head";
import React, { useContext, useState } from 'react';
import AudioPlayer from "../component/home/AudioPlayer";
import ChartCard from "../component/home/ChartCard";
import Header from "../component/home/Header";
import NewRelease from "../component/home/NewRelease";
import SideBar from "../component/home/SideBar";
import Main from "../component/Main";
import MobiHeader from "../component/mobile/MobiHeader";
import MobileMain from "../component/mobile/MobileMain";
// import {data} from "../component/Songs"


export default function Home() {
  // const { state } = useContext(data);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <>
        <div className="pl-10 pr-10 p-5 w-full pb-10 main-app ">
          <div className="">
            <Header />
            <div className="flex pt-10 w-full">
              <SideBar />
              <div className="flex w-full main-mobile">
                <Main />
                <ChartCard />
              </div>
            </div>
            <NewRelease />
          </div>
          <AudioPlayer />
        </div>
      </>
      {/* <div className="home-mobi">
        <MobiHeader />
        <MobileMain />
      </div> */}
    </>
  );
}
