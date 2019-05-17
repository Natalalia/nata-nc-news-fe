import React from "react";
import { Link } from "@reach/router";

const AuthorCard = props => {
  return (
    <Link
      to="/author/articles"
      state={{
        author: props.listAuthor.username
      }}
    >
      <div className="authorItem">
        <img
          alt="avatar"
          src={props.listAuthor.avatar_url}
          height="120"
          width="120"
        />
        <div>
          {props.listAuthor.username.toUpperCase()}
          <p>{props.listAuthor.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default AuthorCard;
