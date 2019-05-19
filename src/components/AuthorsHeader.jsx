import React from "react";
import { Link } from "@reach/router";

const AuthorsHeader = props => {
  return (
    <div className="header">
      <h2 className="titleHeader">AUTHORS</h2>
      <div className="postButtonGrid">
        <Link className="postButton" to="/create-account">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default AuthorsHeader;
