import React from "react";
import { useRooms } from "../features/rooms/useRooms.js";
import { format } from "../ui/utils/helpers.js";
import { FiCopy, FiEdit, FiTrash2 } from "react-icons/fi";

const Rooms = () => {
  const { isLoading, error, rooms } = useRooms();

  console.log("Rooms data:", rooms); // دیباگ داده‌ها

  // مدیریت حالت لودینگ
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // مدیریت حالت خطا
  if (error) {
    return <div className="text-red-500 text-center">خطا: {error.message}</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">اتاق ها</h1>
      {rooms.length === 0 ? (
        <p className="text-gray-600 text-center">No rooms available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-[#7fc1cf] to-[#2c93a2] text-white">
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold">
                  عکس
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold">
                  نام
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold">
                  ظرفیت
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold">
                  قیمت
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold">
                  تخفیف
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold">
                  #
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr
                  key={room.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors duration-200`}
                >
                  <td className="border border-gray-200 px-4 py-2 text-gray-800">
                    {room.image ? (
                      <img
                        src={room.image}
                        alt={room.name || "اتاق"}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      "بدون تصویر"
                    )}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-800">
                    {room.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-800">
                    {room.maxCapacity}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-800">
                    {format.formatCurrencyToman(room.regularPrice)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-800">
                    {format.formatCurrencyToman(room.discount)}
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
                        className="text-green-600 hover:text-green-800 transition-colors"
                        title="ویرایش"
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Rooms;
