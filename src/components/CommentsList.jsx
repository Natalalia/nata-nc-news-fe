import React from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({ comments, removeComment, loggedInUser }) => {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                removeComment={removeComment}
                comment={comment}
                loggedInUser={loggedInUser}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
