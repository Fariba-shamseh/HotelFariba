import React from "react";
import Empty from "../../ui/Empty.jsx";
import { useBookings } from "./useBookings.jsx";
import Spinner from "../../ui/Spinner.jsx";
import BookingRow from "./BookingRow.jsx";
import RoomTableOpration from "../rooms/RoomTableOpration.jsx";
import { useSearchParams } from "react-router-dom";
import BookingTableOpration from "./BookingTableOpration.jsx";

const BookingTable = () => {
  const { bookings, isLoading } = useBookings();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="رزروی" />;

  // لاگ کردن همه مقادیر ممکن status برای دیباگ
  const uniqueStatuses = [
    ...new Set(bookings.map((booking) => booking.status)),
  ];
  console.log("All possible statuses:", uniqueStatuses);

  //filter(RoomTableOpration)
  const filterValue = searchParams.get("status") || "all";
  console.log("Filter value:", filterValue);
  const filterBookings =
    filterValue === "all"
      ? bookings
      : filterValue === "unconfirmed"
        ? bookings.filter((booking) => booking.status === "تأیید نشده")
        : filterValue === "checked_in"
          ? bookings.filter((booking) => booking.status === "وارد شده")
          : filterValue === "checked_out"
            ? bookings.filter((booking) => booking.status === "تسویه کرده")
            : bookings;

  return (
    <div className="p-4 sm:p-6 md:p-8 relative">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">رزروها</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 ">
        <BookingTableOpration />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-[#7fc1cf] to-[#2c93a2] text-white">
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                اتاق
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                مهمان
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                تاریخ
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                وضعیت
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center text-sm font-semibold">
                مبلغ کل
              </th>
            </tr>
          </thead>
          <tbody>
            {filterBookings.map((booking) => (
              <BookingRow key={booking.id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
