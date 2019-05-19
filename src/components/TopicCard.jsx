import React from "react";

const TopicCard = ({ listTopic }) => {
  return (
    <div className="topicItem">
      <h4>{listTopic.slug.toUpperCase()}</h4>
      <p>{listTopic.description}</p>
    </div>
  );
};

export default TopicCard;
