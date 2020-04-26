import React from "react";

import * as S from "./styles";

export const ProductTile = ({ product }) => {
  const featuredImg =
    product.images.length === 1
      ? product.images[0].url
      : product.images.find(image => image.featured).url;

  return (
    <S.Image>
      <img src={featuredImg} />
    </S.Image>
  );
};
