import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Container from "./Container.jsx";
import Footer from "./Footer.jsx";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen md:grid-cols-[20rem_1fr] relative z-10">
      <Header setOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setOpen={setIsSidebarOpen} />
      <main className="overflow-auto pt-4 bg-gray-100 min-h-0 md:pt-20 md:pl-8 md:pb-10 relative">
        {/* لایه پس‌زمینه با تصویر */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/images/back.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        {/* محتوای اصلی روی تصویر */}
        <div className="relative ">
          <Container>
            <Outlet />
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
