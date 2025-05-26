import { useSearchParams } from "react-router-dom";

const Sort = ({ options, sortField }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get(sortField) || options[0].value;

  const handleChange = (e) => {
    const value = e.target.value;
    searchParams.set(sortField, value);
    setSearchParams(searchParams);
  };

  return (
    <select
      value={currentSort}
      onChange={handleChange}
      className={`
        w-full max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[16rem]
        text-xs sm:text-sm md:text-sm lg:text-base
        px-2 sm:px-3 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2
        border
        rounded-lg
        font-medium
        shadow-md
        focus:outline-none focus:ring-1 focus:ring-[#e74c3c]
        transition-all duration-200
        ${
          currentSort === options[0].value
            ? "border-gray-200 bg-gray-100"
            : "border-gray-400 bg-white hover:bg-gray-100"
        }
      `}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Sort;
