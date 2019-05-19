import React from "react";
import { fetchArticle, patchArticle, deleteArticle } from "../api";
import Comments from "./Comments";
import { navigate } from "@reach/router";
import ShowError from "./ShowError";
import HandleVotes from "./HandleVotes";
import dayjs from "dayjs";

class Article extends React.Component {
  state = {
    article: {},
    errorStatus: null,
    errorMsg: null,
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    } else if (this.state.errorMsg) {
      return (
        <ShowError
          status={this.state.errorStatus}
          message={this.state.errorMsg}
        />
      );
    } else {
      return (
        <div>
          <article>
            <h2>{this.state.article.title}</h2>
            <span>By: {this.state.article.author}</span>
            <span>Topic: {this.state.article.topic}</span>
            <span>
              {dayjs(this.state.article.created_at).format("DD/MM/YYYY")}
            </span>
            <p>{this.state.article.body}</p>
            <HandleVotes
              previousVotes={this.state.article.votes}
              loggedInUser={this.props.loggedInUser}
              onVote={this.modifyArticle}
            />
            {this.props.loggedInUser === this.state.article.author ? (
              <button onClick={this.handleClick}>Delete article</button>
            ) : null}
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
    fetchArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, votes: 0, loading: false });
      })
      .catch(({ response: { data, status } }) => {
        this.setState({
          errorMsg: data.msg,
          errorStatus: status,
          loading: false
        });
      });
  }

  modifyArticle = direction => {
    patchArticle(this.state.article.article_id, direction);
  };

  handleClick = () => {
    deleteArticle(this.state.article.article_id).then(() => {
      navigate(`/articles`);
    });
  };
}

export default Article;
