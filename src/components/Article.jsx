import React from "react";
import { fetchArticle } from "../api";
import CommentsList from "./CommentsList";
import CommentsHeader from "./CommentsHeader";

class Article extends React.Component {
  state = {
    article: {},
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    } else {
      return (
        <div>
          <h2>{this.state.article.title}</h2>
          <span>By: {this.state.article.author}</span>
          <span>Topic: {this.state.article.topic}</span>
          <span>{this.state.article.created_at}</span>
          <p>{this.state.article.body}</p>
          {this.props.loggedInUser === this.state.article.author ? (
            <button>Delete article</button>
          ) : null}
          <span>Votes: {this.state.article.votes}</span>
          <span>Comments: {this.state.article.comment_count}</span>
          <CommentsHeader />
          <CommentsList
            article_id={this.state.article.article_id}
            loggedInUser={this.props.loggedInUser}
          />
        </div>
      );
    }
  }

  componentDidMount() {
    fetchArticle(this.props.article_id).then(article => {
      this.setState({ article, loading: false });
    });
  }
}

export default Article;
