import React from "react";
import NukaCarousel from "nuka-carousel";

import * as S from "./styles";

export const GalleryCarousel = ({ images }) => {
  return (
    <NukaCarousel
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
    >
      {images.map(image => (
        <S.Image>
          <img src={image} />
        </S.Image>
      ))}
    </NukaCarousel>
  );
};
