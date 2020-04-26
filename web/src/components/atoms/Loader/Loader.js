import React from "react";

import * as S from "./styles";

export const Loader = ({ fullScreen }) => {
  return (
    <S.Wrapper fullScreen={!!fullScreen}>
      <S.Items>
        <span />
        <span />
        <span />
      </S.Items>
    </S.Wrapper>
  );
};
