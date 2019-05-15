import React from "react";
import { submitComment } from "../api";

class AddComment extends React.Component {
  state = {
    comment_body: ""
  };

  render() {
    return (
      <div>
        {this.props.loggedInUser ? (
          <form onSubmit={this.handleSubmit}>
            <label>Add new comment:</label>
            <br />
            <textarea
              value={this.state.comment_body}
              onChange={this.handleChange}
            />
            <br />
            <button>Comment!</button>
          </form>
        ) : null}
      </div>
    );
  }

  handleChange = event => {
    this.setState({ comment_body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    submitComment(this.props.article_id, {
      username: this.props.loggedInUser,
      body: this.state.comment_body
    }).then(comment => {
      this.props.addComment(comment);
    });
    this.setState({ comment_body: "" });
  };
}

export default AddComment;