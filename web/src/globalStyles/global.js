import { createGlobalStyle } from "styled-components";
import reset from "reset-css/reset.css";

import * as C from "./constants";
import { baseFontColor } from "./constants";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: ${C.baseFontFamily};
    font-size: ${C.baseFontSize};
    line-height: ${C.baseLineHeight};
    color: ${baseFontColor};
    
    * {
      box-sizing: border-box;
    }
    
    h1 {
      font-size: ${C.h1FontSize};
      line-height: ${C.h1LineHeight};
    }

    h3 {
      font-family: ${C.headerFontFamily};
      font-size: ${C.h3FontSize};
      line-height: 1.7rem;
    }

    h4 {
      font-size: ${C.h4FontSize};
    }
        
  }
`;
