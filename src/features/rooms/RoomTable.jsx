import React from "react";
import RoomRow from "./RoomRow.jsx";
import { useRooms } from "./useRooms.js";
import IsLoading from "../../ui/IsLoading.jsx";
import Error from "../../ui/Error.jsx";

const RoomTable = () => {
  const { isLoading, error, rooms } = useRooms();
  console.log("Rooms data:", rooms); // دیباگ داده‌ها

  // مدیریت حالت لودینگ
  if (isLoading) {
    return <IsLoading />;
  }

  // مدیریت حالت خطا
  if (error) {
    return <Error message={error.message} />;
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
                <RoomRow key={room.id} room={room} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RoomTable;
