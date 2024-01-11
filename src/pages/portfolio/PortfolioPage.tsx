import React, { Fragment, useEffect, useState } from "react";
import { MasonryComponent } from "../../components/MasonryComponent";

import { Tab } from "@headlessui/react";
import { PhotoTypes } from "../../types";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { firestore_db } from "../../firebase/config";

export const PortfolioPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [images, setImages] = useState<DocumentData[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(undefined);

  useEffect(() => {
    const imagesRef = collection(firestore_db, "photos");
    getDocs(imagesRef).then((snapshots) => {
      const docs = snapshots.docs.map((doc) => doc.data());
      setImages(docs);
    });
    // .catch((err) => setError(err))
    // .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setImages(() =>
      images.filter((image) => {
        switch (currentTab) {
          case 1:
            return image.type.includes(PhotoTypes.RETRATO);
          case 2:
            return image.type.includes(PhotoTypes.EVENTO);
          default:
            return image;
        }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        images={images}
      />
    </div>
  );
};
