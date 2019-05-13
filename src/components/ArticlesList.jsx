import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  return (
    <ul>
      {props.list.map(item => {
        return (
          <li key={item.article_id}>
            <ArticleCard listElement={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
