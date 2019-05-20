import React from "react";
import { Link } from "@reach/router";
import { fetchArticle } from "../api";
import dayjs from "dayjs";

class ArticleCard extends React.Component {
  state = {
    article: {},
    loading: true
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <p>Loading ...</p>
        </div>
      );
    }
    let correspondentAuthor = null;
    if (this.state.article) {
      correspondentAuthor = this.props.authors.filter(author => {
        return author.username === this.state.article.author;
      });
    }
    return (
      <article className="articlesBrief">
        <Link
          className="title"
          to={`/articles/${this.props.listElement.article_id}`}
        >
          {this.props.listElement.title}
        </Link>
        <div className="info">
          <Link
            to={`/users/${this.props.listElement.author}/articles`}
            className="imageAndName"
          >
            <img
              alt="avatar"
              src={correspondentAuthor[0].avatar_url}
              height="50"
              width="50"
            />
            <span>{this.props.listElement.author}</span>
          </Link>

          <Link to={`/topics/${this.props.listElement.topic}`}>
            {this.props.listElement.topic}
          </Link>
          <span>
            {dayjs(this.props.listElement.created_at).format("DD/MM/YYYY")}
          </span>
        </div>
        <p>{this.createPreview()}...</p>
        <div className="opinions">
          <span>Votes:{this.props.listElement.votes}</span>
          <span>Comments:{this.props.listElement.comment_count}</span>
        </div>
      </article>
    );
  }

  componentDidMount() {
    fetchArticle(this.props.listElement.article_id).then(article => {
      this.setState({ article, loading: false });
    });
  }

  createPreview() {
    const body = this.state.article.body;
    const bodyArray = body.split(" ");
    const bodyPreviewArray = bodyArray.slice(0, 25);
    return bodyPreviewArray.join(" ");
  }
}

export default ArticleCard;
