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
      <div className="buttonsSeparation">
        <button
          className="postButton"
          onClick={() => {
            props.onChangePage(-1);
          }}
          disabled={props.p === 1}
        >
          prev
        </button>
        <button
          className="postButton"
          onClick={() => {
            props.onChangePage(1);
          }}
          disabled={props.p === Math.ceil(props.total_count / 10)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ArticlesList;
