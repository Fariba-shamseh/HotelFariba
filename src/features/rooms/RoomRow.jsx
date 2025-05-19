import { format } from "../../ui/utils/helpers.js";
import { FiCopy, FiEdit, FiTrash2 } from "react-icons/fi";

const RoomRow = ({ room, index, openModal }) => {
  const { image, name, maxCapacity, regularPrice, discount } = room;

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      } hover:bg-gray-100 transition-colors duration-200`}
    >
      <td className="border border-gray-200 px-4 py-2 text-gray-800">
        {room.image ? (
          <img
            src={image}
            alt={name || "اتاق"}
            className="w-16 h-16 object-cover rounded"
          />
        ) : (
          "بدون تصویر"
        )}
      </td>
      <td className="border border-gray-200 px-4 py-2 text-gray-800">{name}</td>
      <td className="border border-gray-200 px-4 py-2 text-gray-800">
        {maxCapacity}
      </td>
      <td className="border border-gray-200 px-4 py-2 text-gray-800">
        {format.formatCurrencyToman(regularPrice)}
      </td>
      <td className="border border-gray-200 px-4 py-2 text-gray-800">
        {format.formatCurrencyToman(discount)}
      </td>
      <td className="border border-gray-200 px-4 py-2 text-gray-800">
        <div className="flex justify-center gap-2">
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors"
            title="کپی"
          >
            <FiCopy size={18} />
          </button>
          <button
            className="text-[#2c93a2] hover:text-green-800 transition-colors"
            title="ویرایش"
            onClick={() => openModal(room)}
          >
            <FiEdit size={18} />
          </button>
          <button
            className="text-red-600 hover:text-red-800 transition-colors"
            title="حذف"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RoomRow;
