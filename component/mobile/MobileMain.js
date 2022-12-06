import React from "react";
const Eric = "/images/Eric.png";
const Vectormobile = "/images/Vector-mobile.png";
function MobileMain() {
  return (
    <div className="">
      <div className="">
        <div className="p-5 pl-7">
          <div className="bg-[#609EAF]   ">
            <div className="flex flex-col ">
              <span className="">Currated playlist</span>
            </div>
            <img src={Vectormobile} className=" pl-40 relative bottom-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMain;
