import React, { Fragment, useEffect, useState } from "react";
import { MasonryComponent } from "../../components/MasonryComponent";

import image1 from "../../assets/images/home/DSC_2377.jpg";
import image2 from "../../assets/images/home/DSC_2461.jpg";
import image3 from "../../assets/images/home/DSC_2668.jpg";
import image4 from "../../assets/images/home/DSC_3200.jpg";
import image5 from "../../assets/images/home/DSC_3236.jpg";
import image6 from "../../assets/images/home/DSC_3239.jpg";
import image8 from "../../assets/images/home/DSCF0272.jpg";
import image9 from "../../assets/images/home/DSCF0291.jpg";
import image10 from "../../assets/images/home/DSCF0296.jpg";
import image11 from "../../assets/images/home/DSCF0352.jpg";
import { Tab } from "@headlessui/react";
import { PhotoTypes } from "../../types";

const images = [
  { src: image11, type: [PhotoTypes.RETRATO, PhotoTypes.CALLEJERA] },
  { src: image10, type: [PhotoTypes.RETRATO, PhotoTypes.CALLEJERA] },
  { src: image9, type: [PhotoTypes.RETRATO] },
  { src: image8, type: [PhotoTypes.RETRATO, PhotoTypes.EVENTO] },
  { src: image6, type: [PhotoTypes.EVENTO, PhotoTypes.CALLEJERA] },
  { src: image5, type: [PhotoTypes.CALLEJERA] },
  { src: image4, type: [PhotoTypes.RETRATO] },
  { src: image3, type: [PhotoTypes.RETRATO] },
  { src: image2, type: [PhotoTypes.EVENTO] },
  { src: image1, type: [PhotoTypes.RETRATO, PhotoTypes.CALLEJERA] },
];

export const PortfolioPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [photos, setPhotos] = useState(images);

  useEffect(() => {
    setPhotos(() =>
      images.filter((image) => {
        switch (currentTab) {
          case 1:
            return image.type.includes(PhotoTypes.RETRATO);
          case 2:
            return image.type.includes(PhotoTypes.EVENTO);
          case 3:
            return image.type.includes(PhotoTypes.CALLEJERA);
          default:
            return image;
        }
      })
    );
  }, [currentTab]);

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
                  className={`px-2 py-1 md:w-20 w-28 transition hover:bg-stone-200 text-stone-600 rounded-t bg-stone-100 font-light border-b-2  ${
                    selected ? "border-stone-400" : ""
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
        images={photos}
      />
    </div>
  );
};
