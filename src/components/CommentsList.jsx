import React from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({ comments, removeComment, loggedInUser, authors }) => {
  return (
    <div>
      <ul className="commentsContainer">
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                removeComment={removeComment}
                comment={comment}
                loggedInUser={loggedInUser}
                authors={authors}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
