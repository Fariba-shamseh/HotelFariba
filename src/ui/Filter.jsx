import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2">
      <button
        className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-4 py-2 rounded-lg mt-4 hover:from-[#f19a8e] hover:to-[#e57366] transition-all duration-200"
        onClick={() => handleClick("all")}
      >
        همه
      </button>
      <button
        className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-4 py-2 rounded-lg mt-4 hover:from-[#f19a8e] hover:to-[#e57366] transition-all duration-200"
        onClick={() => handleClick("no-discount")}
      >
        بدون تخفیف
      </button>
      <button
        className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-4 py-2 rounded-lg mt-4 hover:from-[#f19a8e] hover:to-[#e57366] transition-all duration-200"
        onClick={() => handleClick("with-discount")}
      >
        با تخفیف
      </button>
    </div>
  );
};

export default Filter;
