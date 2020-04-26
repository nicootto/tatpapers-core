import React from "react";

import { useProduct } from "../../api/api";
import { generateProductWhatsappUrl, maybe } from "../../utils/utils";

import { Container } from "../../components/atoms/Container";
import { GalleryCarousel } from "../../components/organisms/GalleryCarousel";
import { Loader } from "../../components/atoms/Loader";

import * as S from "./styles";
import { Button } from "../../components/atoms/Button";
import { mediumScreen } from "../../globalStyles/constants";
import Media from "react-media";

export const ProductPage = ({ match }) => {
  const [product, loading] = useProduct(match.params.id);

  const images = maybe(() => product.images.map(image => image.url), []);

  const handleButtonClick = () => {
    const redirectUrl = generateProductWhatsappUrl(product.id);
    window.location.href = redirectUrl;
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <S.Wrapper>
          <GalleryCarousel images={images} />
          <S.ButtonWrapper>
            <Media query={{ maxWidth: mediumScreen }}>
              {matches =>
                matches ? (
                  <Button onClick={handleButtonClick} fullWidth>
                    LO QUIERO
                  </Button>
                ) : (
                  <Button onClick={handleButtonClick}>LO QUIERO</Button>
                )
              }
            </Media>
          </S.ButtonWrapper>
        </S.Wrapper>
      )}
    </Container>
  );
};
