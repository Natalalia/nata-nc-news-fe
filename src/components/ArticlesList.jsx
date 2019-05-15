import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  return (
    <ul>
      {props.list.map(article => {
        return (
          <li key={article.article_id}>
            <ArticleCard listElement={article} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
