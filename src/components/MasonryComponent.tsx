import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { MasonryComponentProps } from "./types";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useMobileView from "../hooks/useMobileView";

export const MasonryComponent = ({
  images,
  className,
}: MasonryComponentProps) => {
  const { isMobile } = useMobileView();
  const [open, setOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className={className}>
      <Masonry
        breakpointCols={isMobile ? 2 : 4}
        className="flex gap-2 z-10"
        columnClassName=""
      >
        {images.map((image, idx) => (
          <motion.img
            key={image.url}
            className="my-3 cursor-pointer rounded-lg shadow"
            src={image.url}
            alt={idx.toString()}
            onClick={() => {
              setImageIdx(idx);
              setOpen(true);
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              opacity: 0.8,
            }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </Masonry>
      <Lightbox
        open={open}
        index={imageIdx}
        close={() => setOpen(false)}
        slides={images.map((image) => ({
          src: image.url,
        }))}
      />
      {showButton && (
        <button
          onClick={scrollTop}
          className="fixed cursor-pointer font-bold text-3xl right-[20px] bottom-[25px] rounded-full bg-zinc-100 border-zinc-500 opacity-90 border-2 text-zinc-800 hover:text-zinc-50 hover:bg-zinc-500 px-3 py-1"
        >
          ^
        </button>
      )}
    </div>
  );
};
