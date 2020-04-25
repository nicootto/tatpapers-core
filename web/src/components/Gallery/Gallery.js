import React, { useState } from "react";
import styled from "styled-components";

import { size } from "../../config";
import { Image } from "./Image";
import { ImageViewer } from "./ImageViewer";

const Style = styled.div`
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 10px;

    @media ${size.md} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .big {
    grid-column-end: span 2;
    grid-row-end: span 2;

    &:nth-child(2) {
      grid-row-start: 5;
    }

    @media ${size.md} {
      &:nth-child(2) {
        grid-column-start: 3;
        grid-row-start: 3;
      }
    }
  }
`;

const bigImages = [
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
];

const smallImages = [
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*",
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*",
  "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=980:*"
];

export const Gallery = () => {
  const [showImage, setShowImage] = useState();

  const handleImageClick = src => {
    setShowImage(src);
  };

  const handleImageViewerClose = () => {
    setShowImage(null);
  };

  return (
    <Style>
      <div className="gallery">
        {bigImages.map(src => (
          <div className="big">
            <Image onClick={handleImageClick} src={src} />
          </div>
        ))}
        {smallImages.map(src => (
          <Image onClick={handleImageClick} src={src} />
        ))}
      </div>
      <ImageViewer src={showImage} onClose={handleImageViewerClose} />
    </Style>
  );
};
