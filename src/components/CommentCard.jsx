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

  const correspondentAuthor = props.authors.filter(author => {
    return author.username === props.comment.author;
  });

  return (
    <div className="commentCard">
      <div className="info">
        <Link
          to={`/users/${props.comment.author}/articles`}
          className="imageAndName"
        >
          <img
            alt="avatar"
            src={correspondentAuthor[0].avatar_url}
            height="50"
            width="50"
          />
          <span>{props.comment.author}</span>
        </Link>
        <span>{dayjs(props.comment.created_at).format("DD/MM/YYYY")}</span>
      </div>
      <p>{props.comment.body}</p>
      <div className="info">
        <HandleVotes
          previousVotes={props.comment.votes}
          loggedInUser={props.loggedInUser}
          onVote={modifyComment}
        />
        {props.loggedInUser === props.comment.author ? (
          <button className="postButton" onClick={handleDelete}>
            Delete comment
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CommentCard;
