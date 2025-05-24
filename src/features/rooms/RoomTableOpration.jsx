import React from "react";
import Filter from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";

const RoomTableOpration = () => {
  return (
    <>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "همه" },
          { value: "no-discount", label: "بدون تخفیف" },
          { value: "with-discount", label: "با تخفیف" },
        ]}
      />
      <div className="p-4">
        <SortBy
          sortField="sort"
          options={[
            { value: "name-asc", label: "مرتب‌سازی بر اساس نام (الف-ی)" },
            { value: "name-desc", label: "مرتب‌سازی بر اساس نام (ی-الف)" },
            {
              value: "regularPrice-asc",
              label: "مرتب‌سازی بر اساس قیمت (پایین به بالا)",
            },
            {
              value: "regularPrice-desc",
              label: "مرتب‌سازی بر اساس قیمت (بالا به پایین)",
            },
            {
              value: "maxCapacity-asc",
              label: "مرتب‌سازی بر اساس ظرفیت (پایین به بالا)",
            },
            {
              value: "maxCapacity-desc",
              label: "مرتب‌سازی بر اساس ظرفیت (بالا به پایین)",
            },
          ]}
        />
      </div>
    </>
  );
};

export default RoomTableOpration;
