import React from "react";
import Filter from "../../ui/Filter.jsx";
import Sort from "../../ui/Sort.jsx";

const BookingTableOpration = () => {
  return (
    <>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "همه" },
          { value: "unconfirmed", label: "تأیید نشده" },
          { value: "checked_in", label: "وارد شده" },
          { value: "checked_out", label: "تسویه کرده" },
        ]}
      />
    </>
  );
};

export default BookingTableOpration;
