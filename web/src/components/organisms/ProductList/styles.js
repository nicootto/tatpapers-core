import styled from "styled-components";
import { mediumScreen, smallScreen } from "../../../globalStyles/constants";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (min-width: ${smallScreen}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
  }

  @media (min-width: ${mediumScreen}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
`;
