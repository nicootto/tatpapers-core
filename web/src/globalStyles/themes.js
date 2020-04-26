import * as C from "./constants";

export const defaultTheme = {
  button: {
    animation: {
      transition: "0.3s"
    },
    colors: {
      primary: {
        activeBackground: C.theme.primaryDark,
        background: C.theme.primary,
        color: C.white,
        hoverBackground: C.theme.primaryDark,
        hoverColor: C.white
      }
      // secondary: {
      //   activeBackground: C.theme.secondaryDark,
      //   background: C.white,
      //   color: C.theme.secondary,
      //   hoverBackground: C.theme.secondary,
      //   hoverColor: C.white
      // }
    },
    padding: {
      main: "0.9rem 3.7rem",
      small: "0.9rem 1rem"
    },
    typography: {
      fontSize: "1.125rem",
      fontWeight: "600",
      lineHeight: "1.25rem",
      smallFontSize: "1rem",
      textTransform: "uppercase"
    }
  },
  colors: {
    ...C.theme
  },
  spacing: {
    gutter: "1.875rem", // 30px
    spacer: `${C.spacer}rem` // 16px
  },

  typography: {
    baseFontFamily: C.baseFontFamily,
    baseFontSize: C.baseFontSize, // 16px
    baseLineHeight: C.baseLineHeight, // 20px
    boldFontWeight: C.boldFontWeight,
    extraBoldFontWeight: C.extraBoldFontWeight,
    h1FontSize: C.h1FontSize, // 64px
    h1LineHeight: C.h1LineHeight,
    h3FontSize: C.h3FontSize, // 24px
    h4FontSize: C.h4FontSize, // 18px
    smallFontSize: C.smallFontSize // 14px
  }
};
