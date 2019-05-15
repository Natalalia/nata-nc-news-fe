import React from "react";
import LogIn from "./LogIn";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div>
      <h1>Nata NC News</h1>
      <div className="menu">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/topics">Topics</Link>
        </nav>
        <LogIn onLogIn={props.onLogIn} onLogOut={props.onLogOut} />
      </div>
    </div>
  );
};

export default Header;
