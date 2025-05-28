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
      {/*<Sort*/}
      {/*  sortField="sort"*/}
      {/*  options={[*/}
      {/*    { value: "startDate-desc", label: "مرتب‌سازی بر اساس تاریخ (ک)" },*/}
      {/*    { value: "startDate-asc", label: "مرتب‌سازی بر اساس تاریخ  (ب)" },*/}
      {/*    {*/}
      {/*      value: "totalPrice-desc",*/}
      {/*      label: "مرتب‌سازی بر اساس مبلغ کل (ک)",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      value: "totalPrice-asc",*/}
      {/*      label: "مرتب‌سازی بر اساس مبلغ کل (ک)",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
    </>
  );
};

export default BookingTableOpration;
