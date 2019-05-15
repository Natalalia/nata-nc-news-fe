import React from "react";
import { fetchArticle, patchArticle } from "../api";
import Comments from "./Comments";

class Article extends React.Component {
  state = {
    article: {},
    votes: 0,
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    } else {
      return (
        <div>
          <article>
            <h2>{this.state.article.title}</h2>
            <span>By: {this.state.article.author}</span>
            <span>Topic: {this.state.article.topic}</span>
            <span>{this.state.article.created_at}</span>
            <p>{this.state.article.body}</p>
            {this.props.loggedInUser === this.state.article.author ? (
              <button>Delete article</button>
            ) : null}
            <span>Votes:{this.state.article.votes + this.state.votes}</span>
            <button
              onClick={e => this.handleVote(1)}
              disabled={this.state.votes === 1 || this.state.votes === -1}
            >
              like
            </button>
            <button
              onClick={() => this.handleVote(-1)}
              disabled={this.state.votes === 1 || this.state.votes === -1}
            >
              dislike
            </button>
            <span>Comments: {this.state.article.comment_count}</span>
          </article>
          <h3>COMMENTS:</h3>
          <Comments
            article_id={this.state.article.article_id}
            loggedInUser={this.props.loggedInUser}
          />
        </div>
      );
    }
  }

  componentDidMount() {
    fetchArticle(this.props.article_id).then(article => {
      this.setState({ article, votes: 0, loading: false });
    });
  }

  handleVote = direction => {
    patchArticle(this.state.article.article_id, direction);
    this.setState(prevState => {
      const newVote = prevState.votes + direction;
      return { votes: newVote };
    });
  };
}

export default Article;
