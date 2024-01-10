import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarComponent } from "./NavBarComponent";

export const LayoutComponent = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="w-full h-full mt-[100px] mb-5">
        <Outlet />
      </div>
    </div>
  );
};
