import React from "react";
import { Link } from "@reach/router";

const TopicsHeader = ({ loggedInUser }) => {
  return (
    <div>
      <h2>TOPICS</h2>
      {loggedInUser ? <Link to="/new-topic">Add New Topic</Link> : null}
    </div>
  );
};

export default TopicsHeader;
