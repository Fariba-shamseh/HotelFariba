import React from "react";
import AppLayout from "./ui/AppLayout.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import Rooms from "./pages/Rooms.jsx";
import Booking from "./pages/Booking.jsx";

const router = createBrowserRouter([
  {
    path: "/", // والد تمام مسیرها
    element: <AppLayout />,
    children: [
      {
        index: true, //روت اصلی (/)
        element: <Navigate replace to="dashboard" />, // ریدایرکت به داشبورد
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "login", // لاگین , * جدا از AppLayout نمایش داده شود
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
