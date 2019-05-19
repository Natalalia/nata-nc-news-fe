import React from "react";
import HandleVotes from "./HandleVotes";
import { patchComment, deleteComment } from "../api";

const CommentCard = props => {
  const modifyComment = direction => {
    patchComment(props.comment.comment_id, direction);
  };

  const handleDelete = () => {
    deleteComment(props.comment.comment_id);
    props.removeComment(props.comment.comment_id);
  };

  return (
    <div className="commentCard">
      <span>{props.comment.author}</span>
      <span>{props.comment.created_at}</span>
      <p>{props.comment.body}</p>
      <HandleVotes
        previousVotes={props.comment.votes}
        loggedInUser={props.loggedInUser}
        onVote={modifyComment}
      />
      {props.loggedInUser === props.comment.author ? (
        <button onClick={handleDelete}>Delete comment</button>
      ) : null}
    </div>
  );
};

export default CommentCard;
