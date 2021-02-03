import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import Coins from "./Screens/Coins";
import Prices from "./Screens/Prices";
import Excahnges from "./Screens/Excahnges";

export default () => {
  return (
    <Router>
      <Route path="/" exact component={Prices} />
      <Route path="/" exact component={Excahnges} />
      <Route path="/" exact component={Coins} />
    </Router>
  );
};
