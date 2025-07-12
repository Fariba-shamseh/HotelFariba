import React from "react";
import DashboardLayout from "../features/dashboard/DashboardLayout.jsx";
import DashboardFilter from "../features/dashboard/DashboardFilter.jsx";

const Dashboard = () => {
  return (
    <div>
      <DashboardFilter />
      <DashboardLayout />
    </div>
  );
};

export default Dashboard;
