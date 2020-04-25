import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .gallery__img {
    position: relative;

    overflow: hidden;
    width: 100%;
    height: 100%;

    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    cursor: pointer;
    transform: scale(1);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Image = ({ src, onClick }) => (
  <Style>
    <div className="gallery__img">
      <img src={src} onClick={() => onClick(src)} />
    </div>
  </Style>
);
