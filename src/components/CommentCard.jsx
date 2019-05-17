import React from "react";
import { patchComment, deleteComment } from "../api";

class CommentCard extends React.Component {
  state = {
    votes: 0
  };
  render() {
    return (
      <div>
        <span>{this.props.comment.author}</span>

        <span>{this.props.comment.created_at}</span>
        <p>{this.props.comment.body}</p>
        <span>Votes: {this.props.comment.votes + this.state.votes}</span>
        {this.props.loggedInUser ? (
          <div>
            {this.state.votes === 1 ? (
              <button
                onClick={e => this.handleVote(-1)}
                disabled={this.state.votes === -1}
              >
                like
              </button>
            ) : (
              <button
                onClick={e => this.handleVote(1)}
                disabled={this.state.votes === -1}
              >
                like
              </button>
            )}
            {this.state.votes === -1 ? (
              <button
                onClick={() => this.handleVote(1)}
                disabled={this.state.votes === 1}
              >
                dislike
              </button>
            ) : (
              <button
                onClick={() => this.handleVote(-1)}
                disabled={this.state.votes === 1}
              >
                dislike
              </button>
            )}

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
      return { votes: newVote };
    });
  };

  handleDelete = () => {
    deleteComment(this.props.comment.comment_id);
    this.props.removeComment(this.props.comment.comment_id);
  };
}

export default CommentCard;
