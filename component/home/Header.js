import React from "react";
import { Input } from "antd";
const logo = "/images/logo.png";
function Header() {
  const { Search } = Input;

  return (
    <div className="header pl-10 pr-20 pt-20">
      <div className="flex">
        <div className="pr-20">
        <img src={logo} className="logo-icon pr-10" alt="Chart" />
        </div>
        <Search
          placeholder="Search artists"
          onSearch={(value) => console.log(value)}
        //   style={{ width: 400 }}
          className="rounded-sm search"
        />
      </div>
    </div>
  );
}

export default Header;
