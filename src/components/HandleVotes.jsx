import React from "react";

const HandleVotes = props => {
  return (
    <div>
      <span>Votes:{props.previousVotes + props.newVotes}</span>
      {props.loggedInUser ? (
        <div>
          <button
            onClick={() => {
              if (props.newVotes === 1) {
                props.handleVote(-1);
              } else {
                props.handleVote(1);
              }
            }}
            disabled={props.newVotes === -1}
          >
            like
          </button>
          <button
            onClick={() => {
              if (props.newVotes === -1) {
                props.handleVote(1);
              } else {
                props.handleVote(-1);
              }
            }}
            disabled={props.newVotes === 1}
          >
            dislike
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default HandleVotes;
