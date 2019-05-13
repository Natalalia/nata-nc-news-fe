import React from "react";
import ArticlesList from "./ArticlesList";
import ArticlesHeader from "./ArticlesHeader";
import { getArticles } from "../api";

class Articles extends React.Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <ArticlesHeader />
        <ArticlesList list={this.state.articles} />
      </div>
    );
  }

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles, loading: false });
    });
  }
}

export default Articles;
