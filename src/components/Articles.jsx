import React from "react";
import ArticlesList from "./ArticlesList";
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
        <ArticlesList list={this.state.articles} />
      </div>
    );
  }

  search = input => {
    console.log(input);
  };

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles, loading: false });
    });
  }
}

export default Articles;
