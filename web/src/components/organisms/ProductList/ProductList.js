import React from "react";
import { Link } from "react-router-dom";

import { generateProductUrl } from "../../../utils/utils";

import { Loader } from "../../atoms/Loader";
import { ProductTile } from "../../molecules/ProductTile/ProductTile";

import * as S from "./styles";

export const ProductList = ({ products, loading }) => {
  /*
    category.products.forEach(product => {
      const { images } = product;

      let imageUrl;
      if (images.length > 1) {
        images.forEach(image => {
          if (image.featured) {
            imageUrl = image.url;
          }
        });
      } else {
        imageUrl = images[0].url;
      }

      photos.push({
        src: imageUrl,
        width: 3,
        height: 4
      });
    });
  };
   */

  return loading ? (
    <Loader />
  ) : (
    <S.List>
      {products.map(product => (
        <Link to={generateProductUrl(product.id)} key={product.id}>
          <ProductTile product={product} />
        </Link>
      ))}
    </S.List>
  );
};
