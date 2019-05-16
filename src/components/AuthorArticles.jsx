import React from "react";
import Articles from "./Articles";

const AuthorArticles = props => {
  return <Articles author={props.location.state.author} />;
};

export default AuthorArticles;
