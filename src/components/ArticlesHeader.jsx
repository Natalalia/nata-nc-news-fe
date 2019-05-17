import React from "react";
import { Link } from "@reach/router";

const ArticlesHeader = ({ author, loggedInUser }) => {
  return (
    <div>
      {author ? <h2>{author}'s ARTICLES</h2> : <h2>ARTICLES</h2>}
      {loggedInUser ? <Link to="/new-article">Post New Article</Link> : null}
    </div>
  );
};

export default ArticlesHeader;
