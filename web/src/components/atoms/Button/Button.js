import React from "react";

import * as S from "./styles";

export const Button = ({
  children,
  color = "primary",
  size = "md",
  fullWidth = false,
  ...props
}) => {
  return (
    <S.Primary color={color} size={size} fullWidth={fullWidth} {...props}>
      <S.Text size={size}>{children}</S.Text>
    </S.Primary>
  );
};
