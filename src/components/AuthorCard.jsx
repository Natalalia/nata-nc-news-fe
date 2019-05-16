import React from "react";
import { Link } from "@reach/router";

class AuthorCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Image here!</p>
          <Link
            to="/author/articles"
            state={{
              from: "AuthorCard",
              author: this.props.listAuthor.username
            }}
          >
            {this.props.listAuthor.username.toUpperCase()}
          </Link>
        </div>
        <p>{this.props.listAuthor.name}</p>
      </div>
    );
  }
}

export default AuthorCard;
