import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ listTopic }) => {
  return (
    <div className="topicItem">
      <Link to={`/topics/${listTopic.slug}`}>
        <h3>{listTopic.slug.toUpperCase()}</h3>
        <p>{listTopic.description}</p>
      </Link>
    </div>
  );
};

export default TopicCard;
