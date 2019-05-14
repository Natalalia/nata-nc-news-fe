import React from "react";

const TopicCard = props => {
  return (
    <div>
      <h4>{props.listTopic.slug.toUpperCase()}</h4>
      <p>{props.listTopic.description}</p>
    </div>
  );
};

export default TopicCard;
