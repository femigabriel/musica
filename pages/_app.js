import "../styles/globals.css";
import { MusicContext } from "../component/MusicContext";
import React, { useState, useEffect } from "react";
import AfroMusic from "../component/AfroMusic";

function MyApp({ Component, pageProps }) {
  const [playerDetail, setPlayerDetail] = useState(AfroMusic[0]);
  
  return (
    <>
      <MusicContext.Provider value={{ playerDetail, setPlayerDetail }}>
        <Component {...pageProps} />
      </MusicContext.Provider>
    </>
  );
}

export default MyApp;

// import "../styles/globals.css";
// import Link from "next/link";
// import React, { useMemo, useState } from "react";
// import { UserContext } from "../component/useContext/UserContext";

// function MyApp({ Component, pageProps }) {
//   const [user, setUser] = useState(null);

//   const value = useMemo(() => ({user, setUser}), [user, setUser])
//   return (
//     <>
//       <div>
//         <nav>
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/about">About Us</Link>
//           </li>
//         </nav>
//       </div>
//       <UserContext.Provider value={value}>
//         <Component {...pageProps} />
//       </UserContext.Provider>
//     </>
//   );
// }

// export default MyApp;
