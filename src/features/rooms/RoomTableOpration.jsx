import React from "react";
import Filter from "../../ui/Filter.jsx";

const RoomTableOpration = () => {
  return (
    <Filter
      filterField="discount"
      options={[
        { value: "all", label: "همه" },
        { value: "no-discount", label: "بدون تخفیف" },
        { value: "with-discount", label: "با تخفیف" },
      ]}
    />
  );
};

export default RoomTableOpration;
