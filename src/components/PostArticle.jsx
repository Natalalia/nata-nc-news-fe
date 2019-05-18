import React from "react";
import { submitArticle, getTopics } from "../api";
import { navigate } from "@reach/router";

class PostArticle extends React.Component {
  state = {
    title: "",
    body: "",
    topics: [],
    loading: true
  };
  render() {
    if (!this.props.loggedInUser) {
      return <p>You must be logged in to post an article</p>;
    }
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <p>By: {this.props.loggedInUser}</p>
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
            {this.state.topics.map(topic => {
              return (
                <option value={topic.slug}>{topic.slug.toLowerCase()}</option>
              );
            })}
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
    getTopics()
      .then(topics => {
        this.setState({ topics, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
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
