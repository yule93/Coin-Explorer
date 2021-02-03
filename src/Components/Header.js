import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/exchanges">Exchanges</Link>
        </li>
        <li>
          <Link to="/coins">Coins</Link>
        </li>
      </ul>
    </header>
  );
};
