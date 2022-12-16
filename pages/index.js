import Head from "next/head";
import React, { useContext } from "react";
import AudioPlayer from "../component/home/AudioPlayer";
import ChartCard from "../component/home/ChartCard";
import Header from "../component/home/Header";
import NewRelease from "../component/home/NewRelease";
import SideBar from "../component/home/SideBar";
import Main from "../component/Main";
import MobiHeader from "../component/mobile/MobiHeader";
import MobileMain from "../component/mobile/MobileMain";
import {MusicContext} from "../component/MusicContext";

export default function Home() {
  const msg = useContext(MusicContext);
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
            {/* <span>{msg}</span> */}
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
      <div className="home-mobi">
        <MobiHeader />
        <MobileMain />
      </div>
    </>
  );
}

// import React, { useContext } from "react";
// import { UserContext } from "../component/useContext/UserContext";
// import { login } from "../component/useContext/Login";
// import {AfroMusic} from '../component/AfroMusic'

// function index() {
//   const { user, setUser } = useContext(UserContext);
//   return (
//     <div>
//       <h2 className="text-red-300">Home</h2>
//       <span>{JSON.stringify(user, null, 2)}</span>
//       <br></br>
//       {user ? (
//         <button onClick={() => {
//           setUser(null)
//         }}>logout</button>
//       ) : (
//         <button
//           onClick={async () => {
//             const user = await login();
//             setUser(user);
//           }}
//         >
//           login
//         </button>
//       )}
//     </div>
//   );
// }

// export default index;
