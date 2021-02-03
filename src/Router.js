import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Coins from "./Screens/Coins";
import Prices from "./Screens/Prices";
import Exchanges from "./Screens/Exchanges";
import Header from "./Components/Header";

export default () => {
  return (
    <Router>
      <Switch>
        <Header />
        <Route path="/prices" exact component={Prices} />
        <Route path="/exchanges" exact component={Exchanges} />
        <Route path="/coins" exact component={Coins} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
