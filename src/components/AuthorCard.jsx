import React from "react";
import { Link } from "@reach/router";

class AuthorCard extends React.Component {
  render() {
    return (
      <Link
        to="/author/articles"
        state={{
          author: this.props.listAuthor.username
        }}
      >
        <div className="authorItem">
          <img
            alt="avatar"
            src={this.props.listAuthor.avatar_url}
            height="120"
            width="120"
          />
          <div>
            {this.props.listAuthor.username.toUpperCase()}
            <p>{this.props.listAuthor.name}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default AuthorCard;
