import React from "react";

const Header = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <img
          src="/images/PRGI.png"
          alt="CTRL Freakes Logo"
          className="w-[120px] md:w-[180px] mt-3 md:mt-5"
        />
        <h1 className="text-black text-4xl md:text-6xl mt-3 md:mt-[50px] text-center md:text-left">
          CTRL Freakes
        </h1>
      </div>
    </div>
  );
};

export default Header;
