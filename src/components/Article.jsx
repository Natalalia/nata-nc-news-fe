import React from "react";
import { fetchArticle } from "../api";

class Article extends React.Component {
  state = {
    article: {},
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <h2>{this.state.article.title}</h2>
        <span>By: {this.state.article.author}</span>
        <span>Topic: {this.state.article.topic}</span>
        <span>{this.state.article.created_at}</span>
        <p>{this.state.article.body}</p>
        <span>Votes: {this.state.article.votes}</span>
        <span>Comments: {this.state.article.comment_count}</span>
      </div>
    );
  }

  componentDidMount() {
    fetchArticle(this.props.article_id).then(article => {
      this.setState({ article, loading: false });
    });
  }
}

export default Article;
