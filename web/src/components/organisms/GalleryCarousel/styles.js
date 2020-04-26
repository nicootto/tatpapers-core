import styled from "styled-components";

import * as C from "../../../globalStyles/constants";

export const Image = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;

  @media (min-width: ${C.mediumScreen}) {
    height: 500px;
  }

  > img {
    object-fit: contain;
  }
`;
