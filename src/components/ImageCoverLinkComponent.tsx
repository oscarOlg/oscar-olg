import React from "react";
import { ImageCoverLinkComponentProps } from "./types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ImageCoverLinkComponent = ({
  image,
  link,
  title,
}: ImageCoverLinkComponentProps) => {
  return (
    <Link to={link} className="relative shadow cursor-pointer flex">
      <motion.img
        whileHover={{
          opacity: 0.8,
        }}
        src={image}
        alt={title}
      />
      <p className="uppercase absolute pl-5 self-center italic font-semibold text-base sm:text-3xl text-zinc-50">
        {title}
      </p>
    </Link>
  );
};
