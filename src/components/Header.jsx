import React from "react";
import LogIn from "./LogIn";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div>
      <h1>Nata NC News</h1>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/articles">Articles </Link>
        <LogIn onLogIn={props.onLogIn} />
      </nav>
    </div>
  );
};

export default Header;
