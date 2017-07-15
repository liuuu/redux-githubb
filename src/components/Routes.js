import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import asyncComponent from "./asyncComponent";

export default () =>
  <Switch>
    <Route
      exact
      path="/"
      component={asyncComponent(() => import("./Home.js"))}
    />
    <Route
      exact
      path="/all"
      component={asyncComponent(() => import("./AllUser.js"))}
    />
    <Route
      exact
      path="/user/:projectId"
      component={asyncComponent(() => import("./UserDetail.js"))}
    />
    <Route render={() => <Redirect to="/" />} />
  </Switch>;
