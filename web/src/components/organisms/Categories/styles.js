import styled, { css } from "styled-components";

import carruselArrow from "../../../assets/images/carousel-arrow.svg";
import * as C from "../../../globalStyles/constants";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: ${C.smallScreen}) {
    grid-template-columns: 1fr 1fr;
  }

  a {
    color: ${C.baseFontColor};
    text-decoration: none;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 30rem;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
`;
