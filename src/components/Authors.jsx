import React from "react";
import AuthorsHeader from "./AuthorsHeader";
import AuthorCard from "./AuthorCard";
import { getAuthors } from "../api";

class Authors extends React.Component {
  state = {
    authors: [],
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <AuthorsHeader />
        <ul>
          {this.state.authors.map(author => {
            return (
              <li key={author.username}>
                <AuthorCard listAuthor={author} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    getAuthors().then(authors => {
      this.setState({ authors, loading: false });
    });
  }
}

export default Authors;
