import React from "react";
import AuthorsHeader from "./AuthorsHeader";
import AuthorCard from "./AuthorCard";
import { getAuthors } from "../api";

class Authors extends React.Component {
  state = {
    authors: [],
    loading: true,
    error: false
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <p>Loading ...</p>
        </div>
      );
    }
    if (this.state.error) {
      return <p>Internal error, try later...</p>;
    }
    return (
      <div>
        <AuthorsHeader />
        <ul className="authorsContainer">
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
    getAuthors()
      .then(authors => {
        this.setState({ authors, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }
}

export default Authors;
