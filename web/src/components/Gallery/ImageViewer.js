import React from "react";
import styled from "styled-components";

const Style = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ImageViewer = ({ src }) => {
  if (!src) {
    return null;
  }

  return (
    <Style>
      <img src={src} />;
    </Style>
  );
};
