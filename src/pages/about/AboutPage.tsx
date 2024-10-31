import React from "react";
import { ReactComponent as TopArrowIcon } from "../../assets/svg/arrow-top-right-svgrepo-com.svg";
import profile from "../../assets/images/retrato.jpg";
import { Link } from "react-router-dom";
import { SocialsComponent } from "../../components/SocialsComponent";
import { ABOUT_DESCRIPTION } from "../../utils/Constants";

export const AboutPage = () => {
  return (
    <div className="w-full h-full pt-8 pb-24">
      <div className="flex w-10/12 items-center md:items-start md:flex-row flex-col gap-4 bg-zinc-200 p-9 m-auto shadow rounded-lg">
        <img
          className="md:h-[500px]  rounded-lg"
          src={profile}
          alt="fotografia de retrato del fotografo"
        />
        <div className="flex flex-col justify-around gap-4 text-justify p-1	text-zinc-700">
          {ABOUT_DESCRIPTION}
          <Link
            to="/contact"
            className="mt-6 text-center self-center transition rounded-lg font-medium shadow text-zinc-200 bg-zinc-700 hover:bg-zinc-500 px-3 py-2"
          >
            <div className="text-xl flex items-center font-medium">
              ¡Capturemos momentos, creando recuerdos!{" "}
              <TopArrowIcon className="inline-block	h-[70px] w-[70px] sm:h-7 sm:w-7 md:h-[30px] md:w-[30px]" />
            </div>
          </Link>
          <SocialsComponent className="self-center mt-5" />
        </div>
      </div>
    </div>
  );
};
