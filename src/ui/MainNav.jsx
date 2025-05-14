import React from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  FaHome,
  FaCalendarCheck,
  FaHotel,
  FaUsers,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          twMerge(
            clsx(
              "flex items-center w-40 gap-3 px-4 py-2 rounded-lg transition-colors", // کلاس‌های پایه
              {
                "bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white":
                  isActive, // وقتی لینک فعال باشه
                // bg-gray-100": !isActive, // وقتی لینک غیر فعال باشه
              },
            ),
          )
        }
      >
        <Icon />
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col text-gray-900 text-lg gap-3 px-10 py-9">
        <NavItem to="/dashboard" icon={FaHome} label="داشبورد" />
        <NavItem to="/booking" icon={FaCalendarCheck} label="رزرو" />
        <NavItem to="/rooms" icon={FaHotel} label="اتاق ها" />
        <NavItem to="/users" icon={FaUsers} label="کاربران" />
        <NavItem to="/settings" icon={FaCog} label="تنظیمات" />
        <NavItem to="/account" icon={FaUserCircle} label="اکانت" />
      </ul>
    </nav>
  );
};
export default MainNav;
