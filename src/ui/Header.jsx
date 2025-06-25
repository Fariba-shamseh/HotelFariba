import React from "react";
import { HiMenu } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import Logout from "../features/authentication/Logout.jsx";

const Header = ({ setOpen }) => {
  return (
    <header className="col-start-1 row-start-1 min-h-16 bg-white shadow-md border-b-2 border-gray-200 flex items-center px-6 md:col-start-2 relative z-20">
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <HiMenu />
      </button>
      <div className="mr-auto">
        <Logout />
      </div>
    </header>
  );
};

export default Header;
