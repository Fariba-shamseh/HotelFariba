import React from "react";

const SpinnerLogin = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-t-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
};

export default SpinnerLogin;
