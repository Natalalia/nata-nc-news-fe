import React from "react";

const AuthorCard = props => {
  return (
    <div>
      <div>
        <p>Image here!</p>
        <h4>{props.listAuthor.username.toUpperCase()}</h4>
      </div>
      <p>{props.listAuthor.name}</p>
    </div>
  );
};

export default AuthorCard;
