import Filter from "../../ui/Filter.jsx";

const DashboardFilter = () => {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "7 روز گذشته" },
        { value: "30", label: "30 روز گذشته" },
        { value: "90", label: "90 روز گذشته" },
      ]}
    />
  );
};

export default DashboardFilter;
