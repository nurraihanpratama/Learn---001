import React from "react";
import Gti_web from "../../../../../Images/gtiwebp.webp";
import { NavMenu } from "../../Utils/NavMenu";
const Navbar = () => {
  return (
    <nav>
      <div className="px-24 py-2 bg-gray-200">
        <ul className="flex gap-4 ">
          <a href="">cs service</a>
          <a href="">whatsapp teknisi</a>
          <a href="">find us</a>
        </ul>
      </div>
      <div className="flex justify-between h-auto px-24 py-2 border-b-[1px] border-gray-600 bg-cyan-50">
        <NavRight />
        <NavLeft />
      </div>
    </nav>
  );
};

const NavRight = () => {
  return (
    <div id="gti_logo" className="flex flex-wrap items-center w-auto py-2 ">
      <img src={Gti_web} alt="gti_logo" className=" object-contain h-[55px]" />
    </div>
  );
};

const NavLeft = (props) => {
  return (
    <div id="navLeft" className="flex items-center gap-3 ">
      <ul className="flex flex-row gap-4 ">
        {NavMenu.map((menu, index) => (
          <li key={`navbar-${index}`}>
            <a href="">{menu.label}</a>
          </li>
        ))}
      </ul>
      <div className="px-4 py-2 font-medium text-white rounded-full bg-cyan-500">
        <button className="">Masuk ke iDoMember</button>
      </div>
    </div>
  );
};

export default Navbar;
