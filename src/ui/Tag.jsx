import React from "react";

const Tag = ({ type, children }) => {
  const statusToColor = {
    "تأیید نشده": "bg-blue-100 text-blue-800", // آبی برای UNCONFIRMED
    "وارد شده": "bg-green-100 text-green-800", // سبز برای CHECKED_IN
    "تسویه کرده": "bg-gray-100 text-gray-800", // خاکستری برای وضعیت‌های دیگر
  };

  return (
    <span
      className={`px-1 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full text-xs sm:text-sm md:text-sm font-medium ${statusToColor[type]}`}
    >
      {children}
    </span>
  );
};

export default Tag;
