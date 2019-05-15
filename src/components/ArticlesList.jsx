import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  return (
    <div>
      {props.list.map(article => {
        return <ArticleCard key={article.article_id} listElement={article} />;
      })}
    </div>
  );
};

export default ArticlesList;
