import React, { useState } from "react";
import Lightbox, { ControllerRef } from "yet-another-react-lightbox";
import { Inline } from "yet-another-react-lightbox/plugins";
import { CarouselComponentProps } from "./types";

export const CarouselComponent = ({ images }: CarouselComponentProps) => {
  // const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = React.useRef<ControllerRef>(null);
  const slidesNames = [
    "DSCF0209.jpg",
    "_DSF1774.jpg",
    "DSCF8204.jpg",
    "DSCF7985.jpg",
    "DSCF7892.jpg",
    "DSCF8581.jpg",
    "DSCF0352.jpg",
    "_DSF1004.jpg",
    "DSCF9181.jpg",
    "_DSF1564.jpg",
    "DSCF0217.jpg",
    "IMG_0891.jpg",
  ];

  React.useEffect(() => {
    let mounted = true;

    setTimeout(() => {
      if (mounted) {
        ref.current?.next();
      }
    }, 4000);

    return () => {
      mounted = false;
    };
  });

  // const toggleOpen = (state: boolean) => () => setOpen(state);

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  return (
    <div className="">
      <Lightbox
        className="rounded-lg	"
        index={index}
        slides={images
          .filter((image) => slidesNames.includes(image.name))
          .map((image) => ({ src: image.url }))}
        plugins={[Inline]}
        controller={{ ref }}
        on={{
          view: updateIndex,
          // click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "contain",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "1000px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
        styles={{
          container: {
            backgroundColor: "#e2e8f0",
            // borderRadius: "0.5rem",
          },
          icon: {
            fontSize: "20px",
          },
        }}
      />

      {/* <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={images.map((image) => ({ src: image.url }))}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      /> */}
    </div>
  );
};
