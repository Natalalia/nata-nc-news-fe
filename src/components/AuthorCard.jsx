import React from "react";
import { Link } from "@reach/router";

const AuthorCard = ({ listAuthor }) => {
  return (
    <Link
      to="/author/articles"
      state={{
        author: listAuthor.username
      }}
    >
      <div className="authorItem">
        <img
          alt="avatar"
          src={listAuthor.avatar_url}
          height="120"
          width="120"
        />
        <div>
          {listAuthor.username.toUpperCase()}
          <p>{listAuthor.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default AuthorCard;
