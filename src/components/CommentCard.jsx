import React from "react";

class CommentCard extends React.Component {
  state = {
    votes: this.props.comment.votes
  };
  render() {
    return (
      <div>
        <span>{this.props.comment.author}</span>
        <span>{this.props.comment.created_at}</span>
        <p>{this.props.comment.body}</p>
        <span>Votes: {this.props.comment.votes}</span>
      </div>
    );
  }
}

export default CommentCard;
