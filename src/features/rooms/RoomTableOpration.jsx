import React from "react";
import Filter from "../../ui/Filter.jsx";
import Sort from "../../ui/Sort.jsx";

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
      <div className="p-4 pl-0">
        <Sort
          sortField="sort"
          options={[
            { value: "name-asc", label: "مرتب‌سازی بر اساس نام (ک)" },
            { value: "name-desc", label: "مرتب‌سازی بر اساس نام (ب)" },
            {
              value: "regularPrice-asc",
              label: "مرتب‌سازی بر اساس قیمت (ک)",
            },
            {
              value: "regularPrice-desc",
              label: "مرتب‌سازی بر اساس قیمت (ب)",
            },
            {
              value: "maxCapacity-asc",
              label: "مرتب‌سازی بر اساس ظرفیت (ک)",
            },
            {
              value: "maxCapacity-desc",
              label: "مرتب‌سازی بر اساس ظرفیت (ب)",
            },
          ]}
        />
      </div>
    </>
  );
};

export default RoomTableOpration;
