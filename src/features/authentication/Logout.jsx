import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useLogout } from "./useLogout.js";
import SppinerMini from "../../ui/SpinnerMini.jsx";

const Logout = () => {
  const { isLoading, logout } = useLogout();
  return (
    <button
      disabled={isLoading}
      onClick={logout}
      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-xs sm:text-sm transition-colors duration-200"
    >
      {!isLoading ? (
        <FiLogOut className="w-4 h-4 sm:w-5 sm:h-5" />
      ) : (
        <SppinerMini />
      )}
      <span className="hidden sm:inline">خروج</span>
    </button>
  );
};

export default Logout;
