import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type imageType = {
  image: {
    alt: string;
    height: number;
    src: string;
    width: number;
    caption: string;
  };
};

const MyImage = ({ image }: imageType) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
    />
    <span>{image.caption}</span>
  </div>
);

export default MyImage;
