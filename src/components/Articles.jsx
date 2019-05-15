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
        <label>Order by:</label>
        <select onClick={e => this.handleClick(e.target.value)}>
          <option value="">- - -</option>
          <option value="created_at">date created</option>
          <option value="comment_count">number of comments</option>
          <option value="votes">number of votes</option>
        </select>
        <ArticlesList list={this.state.articles} />
        <TopicsList onSelect={this.onSelect} />
      </div>
    );
  }

  handleClick = value => {
    getArticles({ sort_by: value }).then(articles => {
      this.setState({ articles });
    });
  };

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
