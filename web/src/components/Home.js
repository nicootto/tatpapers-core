import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Home = () => {
  return (
    <Content>
      <Logo />
      <div>Sitio en construcción</div>
    </Content>
  );
};
