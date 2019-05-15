import React from "react";
import ArticlesList from "./ArticlesList";
import ArticlesHeader from "./ArticlesHeader";
import TopicsList from "./TopicsList";
import { getArticles } from "../api";

class Articles extends React.Component {
  state = {
    articles: [],
    p: 1,
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
        <button
          onClick={() => {
            this.changePage(1);
          }}
        >
          next
        </button>
        <TopicsList onSelect={this.onSelect} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.p === this.state.p) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    getArticles({ p: this.state.p }).then(articles => {
      this.setState({ articles, loading: false });
    });
  };

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

  changePage = direction => {
    this.setState(prevState => {
      return { p: prevState.p + direction };
    });
  };
}

export default Articles;
