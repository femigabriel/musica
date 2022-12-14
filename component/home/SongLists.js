import React from "react";

function SongLists({ img, title, artist, url, index }) {
  return (
    <div
      className="text-xs text-white shrink-0 w-[153px] mr-[30px]"
      onClick={handleClick}
      data-id={index}
    >
      <img
        src={img}
        height={153}
        width={153}
        alt={title}
        className="rounded-3xl mr-[1.875rem] mb-1"
      />
      <p className="mb-1 w-full truncate">{title}</p>
      <p>{artist}</p>
    </div>
  );
}

export default SongLists;
