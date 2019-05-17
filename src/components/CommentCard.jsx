import React from "react";
import HandleVotes from "./HandleVotes";
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
        <HandleVotes
          previousVotes={this.props.comment.votes}
          newVotes={this.state.votes}
          loggedInUser={this.props.loggedInUser}
          handleVote={this.handleVote}
        />
        {this.props.loggedInUser === this.props.comment.author ? (
          <button onClick={this.handleDelete}>Delete comment</button>
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
