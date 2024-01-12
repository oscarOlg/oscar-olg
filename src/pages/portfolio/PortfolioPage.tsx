import React, { Fragment, useState } from "react";
import { MasonryComponent } from "../../components/MasonryComponent";

import { Tab } from "@headlessui/react";
import { PhotoTypes } from "../../types";
import { useFirestore } from "../../hooks/useFirestore";

export const PortfolioPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { data: images } = useFirestore("photos");

  return (
    <div>
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
                  className={`px-2 py-1 md:w-20 w-28 transition hover:bg-slate-200 text-slate-600 rounded-t bg-slate-100 font-light border-b-2  ${
                    selected ? "border-slate-400" : ""
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
        images={images.filter((image) => {
          switch (currentTab) {
            case 1:
              return image.type.includes(PhotoTypes.RETRATO);
            case 2:
              return image.type.includes(PhotoTypes.EVENTO);
            default:
              return image;
          }
        })}
      />
    </div>
  );
};
