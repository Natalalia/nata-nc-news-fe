import React from "react";
import { Link } from "@reach/router";

const TopicsHeader = ({ loggedInUser }) => {
  return (
    <div className="header">
      <h2 className="titleHeader">TOPICS</h2>
      <div className="postButtonGrid">
        {loggedInUser ? (
          <Link className="postButton" to="/new-topic">
            Add New Topic
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default TopicsHeader;
