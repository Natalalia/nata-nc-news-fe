import React from "react";
import { patchComment, deleteComment } from "../api";

class CommentCard extends React.Component {
  state = {
    votes: this.props.comment.votes,
    vote: 0
  };
  render() {
    return (
      <div>
        <span>{this.props.comment.author}</span>

        <span>{this.props.comment.created_at}</span>
        <p>{this.props.comment.body}</p>
        <span>Votes: {this.props.comment.votes + this.state.vote}</span>

        {this.props.loggedInUser ? (
          <div>
            <button
              onClick={e => this.handleVote(1)}
              disabled={this.state.vote === 1 || this.state.vote === -1}
            >
              like
            </button>
            <button
              onClick={() => this.handleVote(-1)}
              disabled={this.state.vote === 1 || this.state.vote === -1}
            >
              dislike
            </button>
            {this.props.loggedInUser === this.props.comment.author ? (
              <button onClick={this.handleDelete}>Delete comment</button>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  handleVote = direction => {
    patchComment(this.props.comment.comment_id, direction);
    this.setState(prevState => {
      const newVote = prevState.votes + direction;
      return { votes: newVote, vote: direction };
    });
  };

  handleDelete = () => {
    deleteComment(this.props.comment.comment_id);
    this.props.removeComment(this.props.comment.comment_id);
  };
}

export default CommentCard;
