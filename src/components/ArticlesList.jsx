import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ list }) => {
  return (
    <div>
      {list.map(article => {
        return <ArticleCard key={article.article_id} listElement={article} />;
      })}
    </div>
  );
};

export default ArticlesList;
