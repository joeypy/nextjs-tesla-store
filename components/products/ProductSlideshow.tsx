import React, { FC } from "react";
import { Slide } from "react-slideshow-image";
import styles from "./ProductSlideshow.module.css";

type Props = {
  images: string[];
};

export const ProductSlideshow: FC<Props> = ({ images }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {images.map((image) => (
        <div key={image} className={styles["each-slide"]}>
          <div
            style={{
              backgroundImage: `url(${`/products/${image}`})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      ))}
    </Slide>
  );
};
