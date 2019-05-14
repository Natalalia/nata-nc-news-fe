import React from "react";
import ArticlesList from "./ArticlesList";
import ArticlesHeader from "./ArticlesHeader";
import TopicsList from "./TopicsList";
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
        <ArticlesHeader loggedInUser={this.props.loggedInUser} />
        <ArticlesList list={this.state.articles} />
        <TopicsList onSelect={this.onSelect} />
      </div>
    );
  }

  onSelect = topic => {
    getArticles({ topic }).then(articles => {
      this.setState({ articles });
    });
  };

  componentDidMount() {
    getArticles().then(articles => {
      this.setState({ articles, loading: false });
    });
  }
}

export default Articles;
