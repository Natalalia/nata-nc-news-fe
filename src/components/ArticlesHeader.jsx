import React from "react";
import { Link } from "@reach/router";

const ArticlesHeader = props => {
  return (
    <div>
      <h2>ARTICLES</h2>
      {props.loggedInUser ? (
        <Link to="/new-article">Post New Article</Link>
      ) : null}
    </div>
  );
};

export default ArticlesHeader;
