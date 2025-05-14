import React from "react";
import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ isOpen, setOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-200 p-4 shadow-lg transition-transform duration-300 ease-in-out bg-gradient-to-b from-[#7fc1cf] to-[#2c93a2] backdrop-blur-md ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:translate-x-0 md:col-start-1 md:row-span-full md:block md:p-4 md:shadow-none z-20`}
    >
      <div className="flex justify-end md:hidden">
        <button
          onClick={() => setOpen(false)}
          className="text-2xl focus:outline-none"
        >
          <AiOutlineClose />
        </button>
      </div>
      <Logo />
      <MainNav />
    </aside>
  );
};

export default Sidebar;
