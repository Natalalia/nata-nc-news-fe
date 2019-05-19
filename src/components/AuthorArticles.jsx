import React from "react";
import Articles from "./Articles";

const AuthorArticles = props => {
  return <Articles author={props.username} />;
};

export default AuthorArticles;
