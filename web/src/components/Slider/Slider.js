import React from "react";
import styled from "styled-components";
import SlickSlider from "react-slick";
import { config } from "../../config";
import { SliderItem } from "./SliderItem";

const Style = styled.div`
  .slick-prev,
  .slick-next {
    &:before {
      color: ${config.colorGrey};
    }
  }
`;

export const Slider = () => {
  const items = [<SliderItem />, <SliderItem />, <SliderItem />];

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true
  };
  return (
    <Style>
      <SlickSlider {...settings}>{items}</SlickSlider>
    </Style>
  );
};
