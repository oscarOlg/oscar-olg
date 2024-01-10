"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
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

  return (
    <div className={className}>
      <Masonry
        breakpointCols={isMobile ? 2 : 3}
        className="flex gap-2 z-10"
        columnClassName=""
      >
        {images.map((image, idx) => (
          <img
            key={image.src}
            className="my-3 cursor-pointer rounded-lg hover:opacity-90"
            src={image.src}
            alt={idx.toString()}
            onClick={() => {
              setImageIdx(idx);
              setOpen(true);
            }}
          />
        ))}
      </Masonry>
      <Lightbox
        open={open}
        index={imageIdx}
        close={() => setOpen(false)}
        slides={images.map((image) => ({
          src: image.src,
        }))}
      />
    </div>
  );
};
