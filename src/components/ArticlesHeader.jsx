import React from "react";
import { Link } from "@reach/router";

const ArticlesHeader = ({ author, loggedInUser }) => {
  return (
    <div className="header">
      {author ? (
        <h2 className="titleHeader">{author}'s ARTICLES</h2>
      ) : (
        <h2 className="titleHeader">ARTICLES</h2>
      )}
      {loggedInUser ? (
        <div className="postButtonGrid">
          <Link className="postButton" to="/new-article">
            Post New Article
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ArticlesHeader;
