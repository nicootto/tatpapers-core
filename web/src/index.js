import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./globalStyles/global";
import { defaultTheme } from "./globalStyles/themes";
import { history } from "./history";
import { App } from "./app";
import { Router } from "react-router-dom";

const Root = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
