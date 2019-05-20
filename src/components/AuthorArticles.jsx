import React from "react";
import Articles from "./Articles";

const AuthorArticles = props => {
  return <Articles author={props.username} authors={props.authors} />;
};

export default AuthorArticles;
