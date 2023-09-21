import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex w-[100%] h-[100vh]">
      <nav className="w-[20%]">
        <LeftSideBar />
      </nav>
      <main className="w-[50%]">
        <Outlet />
      </main>
      <aside className="w-[30%] flex justify-center">
        <RightSideBar />
      </aside>
    </div>
  );
};

export default MainLayout;
