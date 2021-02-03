import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Coins from "./Screens/Coins";
import Prices from "./Screens/Prices";
import Exchanges from "./Screens/Exchanges";

export default () => {
  <Router>
  <>
    <Route path="/prices" component={Prices} />
    <Route path="/exchanges" component={Exchanges} />
    <Route path="/coins" component={Coins} />
  </>
  </Router>
};
