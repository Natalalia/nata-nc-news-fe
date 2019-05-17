import React from "react";
import { submitArticle } from "../api";
import { navigate } from "@reach/router";

class PostArticle extends React.Component {
  state = {
    title: "",
    body: "",
    topic: null,
    loading: true
  };
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    if (!this.state.author) {
      navigate("/");
    }
    return (
      <div>
        <p>By: {this.state.author}</p>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            required
            value={this.state.title}
            onChange={e => this.handleChange("title", e.target.value)}
          />
          <label>Topic:</label>
          <select
            required
            value={this.state.topic}
            onChange={e => this.handleChange("topic", e.target.value)}
          >
            <option value="">----</option>
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
          </select>
          <textarea
            required
            value={this.state.body}
            onChange={e => this.handleChange("body", e.target.value)}
          />
          <button>Post!</button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ author: this.props.loggedInUser, loading: false });
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    submitArticle({
      username: this.props.loggedInUser,
      title: this.state.title,
      body: this.state.body,
      topic: this.state.topic
    }).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
  };
}

export default PostArticle;
