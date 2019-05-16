import React from "react";
import { Link } from "@reach/router";

const AuthorsHeader = props => {
  return (
    <div>
      <h2>AUTHORS</h2>
      <Link to="/create-account">Create Account</Link>
    </div>
  );
};

export default AuthorsHeader;
