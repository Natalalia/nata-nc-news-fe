import React from "react";
import { submitArticle } from "../api";
import { navigate } from "@reach/router";

class PostArticle extends React.Component {
  state = {
    title: "",
    body: "",
    topic: "coding",
    loading: true
  };
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <p>By: {this.state.author}</p>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            value={this.state.title}
            onChange={e => this.handleChange("title", e.target.value)}
          />
          <label>Topic:</label>
          <select
            value={this.state.topic}
            onChange={e => this.handleChange("topic", e.target.value)}
          >
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
          </select>
          <textarea
            value={this.state.body}
            onChange={e => this.handleChange("body", e.target.value)}
          />
          <button>Post!</button>
        </form>
      </div>
    );
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
      console.log(article.article_id);
      navigate(`/articles/${article.article_id}`);
    });
  };

  componentDidMount() {
    this.setState({ author: this.props.loggedInUser, loading: false });
  }
}

export default PostArticle;
