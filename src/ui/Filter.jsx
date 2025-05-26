import React from "react";
import { useSearchParams } from "react-router-dom";
import { clsx } from "clsx";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value; // مقدار فعلی فیلتر

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    // <div className="flex gap-2">
    //   <button
    //     className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-4 py-2 rounded-lg mt-4 hover:from-[#f19a8e] hover:to-[#e57366] transition-all duration-200"
    //     onClick={() => handleClick("all")}
    //   >
    //     همه
    //   </button>
    //   <button
    //     className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-4 py-2 rounded-lg mt-4 hover:from-[#f19a8e] hover:to-[#e57366] transition-all duration-200"
    //     onClick={() => handleClick("no-discount")}
    //   >
    //     بدون تخفیف
    //   </button>
    //   <button
    //     className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-4 py-2 rounded-lg mt-4 hover:from-[#f19a8e] hover:to-[#e57366] transition-all duration-200"
    //     onClick={() => handleClick("with-discount")}
    //   >
    //     با تخفیف
    //   </button>
    // </div>

    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          className={clsx(
            "rounded-lg transition-all duration-200 text-xs sm:text-sm md:text-sm lg:text-base px-2 sm:px-3 md:px-3 lg:px-4 py-1 sm:py-1 md:py-1 lg:py-1.5",
            {
              "bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white":
                currentFilter === option.value, // حالت فعال: قرمز
              "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100":
                currentFilter !== option.value, // حالت غیرفعال: بوردری با متن خاکستری
            },
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
