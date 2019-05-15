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
      const bodyPreviewArray = bodyArray.slice(0, 8);
      bodyPreview = bodyPreviewArray.join(" ");
    }
    return (
      <article>
        <Link to="/">{this.props.listElement.author}</Link>
        <Link to="/">{this.props.listElement.topic}</Link>
        <span>{this.props.listElement.created_at}</span>
        <Link to={`/articles/${this.props.listElement.article_id}`}>
          {this.props.listElement.title}
        </Link>
        <p>{bodyPreview}...</p>
        <span>Votes:{this.props.listElement.votes}</span>
        <span>Comments:{this.props.listElement.comment_count}</span>
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
