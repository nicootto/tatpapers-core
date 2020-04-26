import React from "react";
import logo from "../../../assets/images/logo.png";

import * as S from "./styles";

export const MainMenu = () => {
  return (
    <S.Wrapper>
      <a href="/">
        <S.Logo alt="Tatpapers" src={logo} />
      </a>
    </S.Wrapper>
  );
};
