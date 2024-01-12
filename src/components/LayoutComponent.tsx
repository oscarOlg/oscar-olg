import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarComponent } from "./NavBarComponent";

export const LayoutComponent = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="w-full from-slate-100 via-slate-300 to-slate-800 bg-gradient-to-b h-full pt-[100px] mb-5">
        <Outlet />
      </div>
    </div>
  );
};
