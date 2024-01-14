import React, { Fragment, useState } from "react";
import { MasonryComponent } from "../../components/MasonryComponent";

import { Tab } from "@headlessui/react";
import { PhotoTypes } from "../../types";
import { useFirestore } from "../../hooks/useFirestore";
import { DocumentData } from "firebase/firestore";

export const PortfolioPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { data: images } = useFirestore("photos");

  const sortByName = (a: DocumentData, b: DocumentData) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  };

  return (
    <div className="pt-8 to-slate-100 from-slate-400 bg-gradient-to-b">
      <Tab.Group
        onChange={(index) => {
          setCurrentTab(index);
        }}
        defaultIndex={currentTab}
      >
        <Tab.List className="flex justify-center gap-4 w-fit m-auto">
          {Object.values(PhotoTypes).map((tabName) => (
            <Tab key={tabName} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`px-2 py-1 md:w-20 w-28 transition md:hover:bg-slate-700 rounded-t text-slate-100 font-semibold border-b-2  ${
                    selected
                      ? "border-slate-100"
                      : "border-slate-700 opacity-80"
                  }`}
                >
                  {tabName}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <MasonryComponent
        className="w-11/12 p-2 sm:p-4 my-5 mx-auto"
        images={images
          .filter((image) => {
            switch (currentTab) {
              case 1:
                return image.type.includes(PhotoTypes.RETRATO);
              case 2:
                return image.type.includes(PhotoTypes.EVENTO);
              default:
                return image;
            }
          })
          .sort(sortByName)}
      />
    </div>
  );
};
