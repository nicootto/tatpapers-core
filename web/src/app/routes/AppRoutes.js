import React from "react";
import { Route, Switch } from "react-router-dom";

import * as paths from "./paths";

import { HomePage } from "../../pages/Home";
import { CategoryPage } from "../../pages/Category";
import { ProductPage } from "../../pages/Product";

export const Routes = () => (
  <Switch>
    <Route exact path={paths.baseUrl} component={HomePage} />
    <Route exact path={paths.categoryUrl} component={CategoryPage} />
    <Route exact path={paths.productUrl} component={ProductPage} />
  </Switch>
);
