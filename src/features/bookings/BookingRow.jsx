import React from "react";
import { format } from "../../ui/utils/helpers.js";
import Tag from "../../ui/Tag.jsx";

const BookingRow = ({
  booking: {
    startDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    rooms: { name: roomName },
  },
}) => {
  return (
    <tr className="hover:bg-gray-100 border-b border-gray-200">
      <td className="p-2 border border-gray-200 text-center">{roomName}</td>
      <td className="p-2 border border-gray-200 text-center">
        <div>
          <div className="text-sm font-medium">{guestName}</div>
          <div className="text-xs text-gray-500">{email}</div>
        </div>
      </td>
      <td className="p-2 border border-gray-200 text-center">
        <div className="space-y-1">
          <div className="text-xs sm:text-sm flex items-center gap-1 sm:gap-2 md:gap-3">
            {numNights} شب اقامت →
            {format.isToday(startDate)
              ? "امروز"
              : format.formatDistanceFromNow(startDate)}
          </div>
        </div>
      </td>
      <td className="p-2 border border-gray-200 text-center">
        <Tag type={status}>{status} </Tag>
      </td>
      <td className="p-2 border border-gray-200 text-center">
        {format.formatCurrencyToman(totalPrice)}
      </td>
    </tr>
  );
};

export default BookingRow;
