import { useSearchParams } from "react-router-dom";

const SortBy = ({ options, sortField }) => {
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
        w-full max-w-[16rem] sm:max-w-[20rem] lg:max-w-[24rem]
        text-lg sm:text-base
        px-4 py-2 sm:px-5 sm:py-3
        border
        rounded-lg
        font-medium
        shadow-lg
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

export default SortBy;
