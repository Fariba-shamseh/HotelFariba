import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[120rem] mx-auto shadow-md px-4 bg-white p-6 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
