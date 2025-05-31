import React from "react";

const SpinnerLogin = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 border-4 border-t-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
};

export default SpinnerLogin;
