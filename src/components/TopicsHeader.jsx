import React from "react";
import { Link } from "@reach/router";

const TopicsHeader = props => {
  return (
    <div>
      <h2>TOPICS</h2>
      {props.loggedInUser ? <Link to="/new-topic">Post New Topic</Link> : null}
    </div>
  );
};

export default TopicsHeader;
