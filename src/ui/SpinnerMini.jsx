import React from "react";

const SpinnerMini = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-6 lg:w-6 border-t-2 border-b-2 border-[#2c93a2]" />
    </div>
  );
};

export default SpinnerMini;
