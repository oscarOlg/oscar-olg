import React from "react";
import { MasonryComponent } from "../../components/MasonryComponent";
import { ReactComponent as TopArrowIcon } from "../../assets/svg/arrow-top-right-svgrepo-com.svg";

import { PhotoTypes, PortfolioParamTypes } from "../../types";
import { useFirestore } from "../../hooks/useFirestore";
import { DocumentData } from "firebase/firestore";
import { Link, useSearchParams } from "react-router-dom";
import {
  EVENTS_DESCRIPTION,
  GENERAL_DESCRIPTION,
  PORTRAITS_DESCRIPTION,
} from "../../utils/Constants";

const tabList = [
  {
    path: "/portfolio/",
    label: PhotoTypes.TODAS,
    value: null,
  },
  {
    path: `?type=${PortfolioParamTypes.PORTRAITS}`,
    label: PhotoTypes.RETRATO,
    value: PortfolioParamTypes.PORTRAITS,
  },
  {
    path: `?type=${PortfolioParamTypes.EVENTS}`,
    label: PhotoTypes.EVENTO,
    value: PortfolioParamTypes.EVENTS,
  },
];

export const PortfolioPage = () => {
  const { data: images } = useFirestore("photos");
  const [searchParams] = useSearchParams();

  const sortByName = (a: DocumentData, b: DocumentData) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  };

  const filterImageList = () => {
    let filteredList = images.filter((image) => {
      switch (searchParams.get("type")) {
        case PortfolioParamTypes.PORTRAITS:
          return image.type.includes(PhotoTypes.RETRATO);
        case PortfolioParamTypes.EVENTS:
          return image.type.includes(PhotoTypes.EVENTO);
        default:
          return image;
      }
    });

    if (searchParams.get("type") !== null) {
      return filteredList.sort(sortByName);
    }

    return filteredList;
  };

  const getDescription = () => {
    switch (searchParams.get("type")) {
      case PortfolioParamTypes.PORTRAITS:
        return PORTRAITS_DESCRIPTION;
      case PortfolioParamTypes.EVENTS:
        return EVENTS_DESCRIPTION;
      default:
        return GENERAL_DESCRIPTION;
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 md:pt-9 pt-20 to-zinc-100 from-zinc-400 bg-gradient-to-b">
      <div className="flex justify-center gap-3 md:gap-4 m-auto">
        {tabList.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`px-4 py-1 md:text-base text-lg transition md:hover:bg-zinc-700 rounded-t text-zinc-100 font-semibold border-b-2  ${
              searchParams.get("type") === tab.value
                ? "border-zinc-100"
                : "border-zinc-700 opacity-80"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <div className="w-11/12 max-w-5xl flex flex-col gap-2">
        <p className="text-justify text-lg p-1 text-zinc-800">
          {getDescription()}
        </p>
      </div>
      <Link
        to="/contact"
        className="transition rounded-lg text-zinc-100 shadow bg-zinc-800 hover:bg-zinc-700 px-5 py-2"
      >
        <div className="flex items-center">
          Reserva tu evento o sesión{" "}
          <TopArrowIcon className="inline-block	h-[30px] w-[30px]" />
        </div>
      </Link>
      <hr className="w-1/2 h-1 mx-auto border-0 rounded-lg my-1 bg-zinc-500" />

      <MasonryComponent
        className="w-11/12 mb-5 mx-auto"
        images={filterImageList()}
      />
    </div>
  );
};
