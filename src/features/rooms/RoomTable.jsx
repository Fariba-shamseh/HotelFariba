import React, { useEffect, useState } from "react";
import RoomRow from "./RoomRow.jsx";
import { useRooms } from "./useRooms.js";
import Spinner from "../../ui/Spinner.jsx";
import Error from "../../ui/Error.jsx";
import CreateRoomForm from "./CreateRoomForm.jsx";
import Modal from "react-modal";
import { useSearchParams } from "react-router-dom";
import RoomTableOpration from "./RoomTableOpration.jsx";
import Empty from "../../ui/Empty.jsx";

const RoomTable = () => {
  const { isLoading, error, rooms } = useRooms();
  const [searchParams] = useSearchParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null); // برای مدیریت اتاق انتخاب‌شده

  const openModal = (room = null) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/back3.jpg";
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  if (!rooms.length) return <Empty resourceName="اتاقی" />;

  //filter(RoomTableOpration)
  const filterValue = searchParams.get("discount") || "all";
  console.log("Filter value:", filterValue);
  const filterRooms =
    filterValue === "all"
      ? rooms
      : filterValue === "no-discount"
        ? rooms.filter((room) => room.discount === 0)
        : filterValue === "with-discount"
          ? rooms.filter((room) => room.discount > 0)
          : rooms; // مقدار پیش‌فرض اگه فیلتر نامعتبر باشه

  //sort(RoomTableOpration)
  const sortValue = searchParams.get("sort") || "name-asc";
  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedRooms = [...filterRooms].sort((a, b) => {
    // برای name (رشته)
    if (field === "name") {
      return a[field].localeCompare(b[field]) * modifier;
    }
    // برای regularPrice و maxCapacity (عدد)
    return (a[field] - b[field]) * modifier;
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">اتاق‌ها</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 ">
        <RoomTableOpration />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-[#7fc1cf] to-[#2c93a2] text-white">
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                عکس
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                نام
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                ظرفیت
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                قیمت
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                تخفیف
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {/*{filterRooms.map((room, index) => (*/}
            {sortedRooms.map((room, index) => (
              <RoomRow
                key={room.id}
                room={room}
                index={index}
                openModal={(r) => openModal(r)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto p-6 bg-white rounded-lg shadow-lg z-50"
        overlayClassName="absolute inset-0 bg-[url('/images/back3.jpg')] bg-cover bg-center flex justify-center items-center z-40"
        ariaHideApp={false} // غیرفعال کردن aria-hidden
        parentSelector={() => document.querySelector("main")} // محدود کردن به <main>
      >
        <CreateRoomForm roomToEdit={selectedRoom} />
        <button onClick={closeModal} className="mt-4 text-red-600">
          بستن
        </button>
      </Modal>

      <button
        onClick={openModal}
        className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-4 py-2 mt-6 rounded-lg hover:from-[#f19a8e] hover:to-[#e57366] transition-all duration-200"
      >
        افزودن اتاق جدید
      </button>
    </div>
  );
};

export default RoomTable;
