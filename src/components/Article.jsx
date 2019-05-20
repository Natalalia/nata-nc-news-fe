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
    let correspondentAuthor = null;
    if (this.state.loading) {
      return <p>Loading ...</p>;
    } else if (this.state.errorMsg) {
      return (
        <ShowError
          status={this.state.errorStatus}
          message={this.state.errorMsg}
        />
      );
    }
    correspondentAuthor = this.props.authors.filter(author => {
      return author.username === this.state.article.author;
    });

    return (
      <div>
        <article>
          <h2>{this.state.article.title}</h2>
          <div className="info">
            <div className="imageAndName">
              <img
                alt="avatar"
                src={
                  correspondentAuthor &&
                  correspondentAuthor[0] &&
                  correspondentAuthor[0].avatar_url
                }
                height="50"
                width="50"
              />
              <span>By: {this.state.article.author}</span>
            </div>
            <span>Topic: {this.state.article.topic}</span>
            <span>
              {dayjs(this.state.article.created_at).format("DD/MM/YYYY")}
            </span>
          </div>
          <p>{this.state.article.body}</p>
          <div className="info">
            <HandleVotes
              previousVotes={this.state.article.votes}
              loggedInUser={this.props.loggedInUser}
              onVote={this.modifyArticle}
            />
            {this.props.loggedInUser === this.state.article.author ? (
              <button className="postButton" onClick={this.handleClick}>
                Delete article
              </button>
            ) : null}
          </div>
        </article>
        <Comments
          article_id={this.state.article.article_id}
          loggedInUser={this.props.loggedInUser}
          avatar={this.props.avatar}
          authors={this.props.authors}
        />
      </div>
    );
  }

  componentDidMount() {
    debugger;
    fetchArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, votes: 0, loading: false });
      })
      .catch(err => {
        console.log(err);
        /* this.setState({
          errorMsg: data.msg,
          errorStatus: status,
          loading: false
        }); */
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
