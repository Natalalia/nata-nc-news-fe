import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div>
      <h1>Nata NC News</h1>
      <nav>
        <Link to="/articles">Articles </Link>
      </nav>
    </div>
  );
};

export default Header;
