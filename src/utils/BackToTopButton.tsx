import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed left-1-2 cursor-pointer bottom-0 pb-5">
      {visible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="transition rounded-full bg-slate-100 border-slate-500 text-2xl opacity-90 border-2 font-bold text-slate-400 hover:text-slate-50 hover:bg-slate-500 px-2 "
          onClick={scrollToTop}
        >
          ^
        </motion.button>
      )}
    </div>
  );
};
