import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  return (
    <div>
      <h3>ARTICLES</h3>
      <ul>
        {props.list.map(item => {
          return (
            <li key={item.article_id}>
              <ArticleCard listElement={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
