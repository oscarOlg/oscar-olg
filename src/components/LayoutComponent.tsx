import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarComponent } from "./NavBarComponent";

export const LayoutComponent = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="mt-[75px] mb-5">
        <Outlet />
      </div>
    </div>
  );
};
