import React from "react";
import { Link } from "@reach/router";
import { fetchArticle } from "../api";

class ArticleCard extends React.Component {
  state = {
    article: {},
    loading: true
  };

  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    }
    let bodyPreview = "";
    if (!this.state.loading) {
      const body = this.state.article.body;
      const bodyArray = body.split(" ");
      const bodyPreviewArray = bodyArray.slice(0, 25);
      bodyPreview = bodyPreviewArray.join(" ");
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
          <Link to="/author/articles">{this.props.listElement.author}</Link>
          <span>{this.props.listElement.topic.toUpperCase()}</span>
          <span>{this.props.listElement.created_at}</span>
        </div>
        <p>{bodyPreview}...</p>
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
}

export default ArticleCard;
