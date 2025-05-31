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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/", // والد تمام مسیرها
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        className="m-2"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className:
            "text-base max-w-[500px] p-4 px-6 bg-gray-50 text-gray-700",
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
