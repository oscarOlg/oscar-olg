import React from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { CarouselComponent } from "../../components/CarouselComponent";
import { SocialsComponent } from "../../components/SocialsComponent";
import portraitCover from "../../assets/images/portrait-cover.jpg";
import eventCover from "../../assets/images/event-cover.jpg";
import { AboutCardComponent } from "../../components/AboutCardComponent";
import { Link } from "react-router-dom";
import { PortfolioParamTypes } from "../../types";
import {
  PORTRAITS_DESCRIPTION,
  EVENTS_DESCRIPTION,
} from "../../utils/Constants";

export const HomePage = () => {
  const { data: images } = useFirestore("photos");

  return (
    <div className="flex flex-col bg-slate-300 gap-7 lg:pt-7 pb-9">
      <CarouselComponent images={images} />
      <div className="w-8/12 max-w-5xl items-center flex md:flex-row flex-col gap-7 self-center">
        <img
          className="self-center h-64 sm:h-96"
          src={portraitCover}
          alt="retratos"
        />
        <div className="flex w-full flex-col gap-4 md:gap-10">
          <p className="text-slate-700 italic text-xl font-medium">
            Fotografia de retrato
          </p>
          <p className="text-justify p-1 text-slate-700">
            {PORTRAITS_DESCRIPTION}
          </p>
          <Link
            to={`/portfolio/?type=${PortfolioParamTypes.PORTRAITS}`}
            className="transition self-center font-medium rounded-lg text-slate-100 shadow bg-slate-800 hover:bg-slate-700 px-5 py-2"
          >
            Ver mas
          </Link>
        </div>
      </div>
      <hr className="w-1/2 h-1 mx-auto my-4 border-0 rounded-lg md:my-10 bg-slate-400" />
      <div className="w-8/12 max-w-5xl items-center flex md:flex-row md:flex-row-reverse flex-col gap-7 self-center">
        <img
          className="self-center h-64 sm:h-96"
          src={eventCover}
          alt="eventos"
        />
        <div className="flex w-full flex-col justify-evenly gap-4">
          <p className="text-slate-700 italic text-xl font-medium">
            Fotografia de eventos
          </p>
          <p className="text-justify p-1 text-slate-700">
            {EVENTS_DESCRIPTION}
          </p>
          <Link
            to={`/portfolio/?type=${PortfolioParamTypes.EVENTS}`}
            className="transition self-center font-medium rounded-lg text-slate-100 shadow bg-slate-800 hover:bg-slate-700 px-5 py-2"
          >
            Ver mas
          </Link>
        </div>
      </div>
      <AboutCardComponent />
      <SocialsComponent className="self-center" />
      <hr className="w-1/2 h-1 mx-auto my-4 border-0 rounded-lg md:my-10 bg-slate-400" />
    </div>
  );
};
