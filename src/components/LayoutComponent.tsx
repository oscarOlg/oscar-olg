import React from "react";
import { Outlet } from "react-router-dom";
import { NavBarComponent } from "./NavBarComponent";
import { motion } from "framer-motion";

export const LayoutComponent = () => {
  return (
    <div>
      <NavBarComponent />
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-[75px] mb-5"
      >
        <Outlet />
      </motion.div>
    </div>
  );
};
