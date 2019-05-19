import React from "react";
import { Link } from "@reach/router";
import HandleVotes from "./HandleVotes";
import { patchComment, deleteComment } from "../api";
import dayjs from "dayjs";

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
      <div className="info">
        <Link to={`/users/${props.comment.author}/articles`}>
          {props.comment.author}
        </Link>
        <span>{dayjs(props.comment.created_at).format("DD/MM/YYYY")}</span>
      </div>
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
