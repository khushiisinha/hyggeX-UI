import React, { useState } from "react";
import cross from "../src/assets/cross.png";
import menu from "../src/assets/menu.svg"
import logo from "../src/assets/hyggex logo.png"
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="sticky top-0 left-0 h-10 md:h-16 flex justify-between   bg-white ">
      <div className="flex items-center">
        <img src={logo} className="w-8 h-6 rounded-full"/>
        <span className="md:text-2xl text-blue-e-600 font-bold">HyggeX</span>
      </div>
      <img src={menu}
        className={` absolute md:hidden top-1.5 right-2 block w-6 h-6 bg-white ${
          openNav ? "hidden" : "block"
        }`}
        onClick={() => {
          setOpenNav(true);
        }}
      >
        
      </img>
      <div
        className={`relative flex flex-col md:items-center md:flex-row bg-blue-950
        md:bg-white gap-4 h-fit p-4 w-40 md:w-auto md:p-0 text-white md:text-black 
        md:h-auto md:mt-0 md:gap-7  text-lg ${
          openNav ? "block" : "hidden"
        } md:flex `}
      >
        <img
          src={cross}
          className="absolute top-1 right-2 text-xs w-6 h-6 md:hidden"
          onClick={() => {
            setOpenNav(false);
          }}
        ></img>
        <button>Home</button>
        <button>Flashcard</button>
        <button>Contact</button>
        <button>FAQ</button>
        <button className="text-white bg-blue-950 px-5 rounded-2xl py-0.5 text-center mt-1 hover:bg-blue-900">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
