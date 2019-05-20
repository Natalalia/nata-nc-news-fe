import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  return (
    <div>
      {props.list.map(article => {
        return (
          <ArticleCard
            key={article.article_id}
            listElement={article}
            authors={props.authors}
          />
        );
      })}
      <button
        onClick={() => {
          props.onChangePage(-1);
        }}
        disabled={props.p === 1}
      >
        prev
      </button>
      <button
        onClick={() => {
          props.onChangePage(1);
        }}
        disabled={props.p === Math.ceil(props.total_count / 10)}
      >
        next
      </button>
    </div>
  );
};

export default ArticlesList;
