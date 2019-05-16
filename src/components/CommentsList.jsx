import React from "react";
import CommentCard from "./CommentCard";

const CommentsList = props => {
  return (
    <div>
      <ul>
        {props.comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                removeComment={props.removeComment}
                comment={comment}
                loggedInUser={props.loggedInUser}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
