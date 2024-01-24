import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as TopArrowIcon } from "../assets/svg/arrow-top-right-svgrepo-com.svg";
import profile from "../assets/images/retrato.jpg";
import { motion } from "framer-motion";
import { ABOUT_DESCRIPTION } from "../utils/Constants";

export const AboutCardComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex md:w-11/12 w-10/12 items-center md:items-start md:flex-row flex-col gap-4 bg-slate-200 p-9 m-auto shadow rounded-lg"
    >
      <img
        className="md:h-[400px] sm:h-[300px] rounded-lg"
        src={profile}
        alt="retrato del fotografo"
      />
      <div className="flex flex-col justify-around gap-4 text-justify p-1	text-slate-700">
        <p className="text-slate-700 italic text-xl font-medium">
          Conoce a tu fotógrafo:
        </p>
        {ABOUT_DESCRIPTION}
        <Link
          to="/contact"
          className="mt-6 text-center self-center transition rounded-lg font-medium shadow text-slate-100 bg-slate-800 hover:bg-slate-700 px-3 py-2"
        >
          <div className="text-xl flex items-center font-medium">
            ¡Capturemos momentos, creando recuerdos! Ponte en contacto{" "}
            <TopArrowIcon className="inline-block	h-[70px] w-[70px] sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]" />
          </div>
        </Link>
        <Link
          to="/portfolio"
          className="transition w-30 self-center opacity-80 hover:opacity-100 rounded-lg bg-slate-200 border-slate-400 border-2 font-medium hover:bg-slate-300 px-3 py-2"
        >
          ver portafolio
        </Link>
      </div>
    </motion.div>
  );
};
