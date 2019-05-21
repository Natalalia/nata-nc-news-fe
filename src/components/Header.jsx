import React from "react";
import LogIn from "./LogIn";
import { Link } from "@reach/router";

const Header = ({ onLogIn, onLogOut, loggedInUser, avatar }) => {
  return (
    <div>
      <Link to="/">
        <h1>Nata NC News</h1>
      </Link>
      <div className="menu">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/authors">Authors</Link>
        </nav>
        <LogIn
          onLogIn={onLogIn}
          onLogOut={onLogOut}
          loggedInUser={loggedInUser}
          avatar={avatar}
        />
      </div>
      {!loggedInUser ? (
        <Link to="/create-user" className="createUserLink">
          Not a user yet? Sign up now!
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
