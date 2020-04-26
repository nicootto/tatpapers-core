import styled from "styled-components";

import {
  containerWidth,
  spacer,
  mediumScreen
} from "../../../globalStyles/constants";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 ${spacer}rem;

  @media (min-width: ${mediumScreen}) {
    width: ${containerWidth};
  }
`;
