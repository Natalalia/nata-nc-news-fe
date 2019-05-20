import React from "react";
import ArticlesList from "./ArticlesList";
import { getArticles } from "../api";

class TopicArticles extends React.Component {
  state = {
    articles: [],
    total_count: 0,
    p: 1,
    sort_by: null,
    loading: true,
    error: false
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <p>Loading ...</p>
        </div>
      );
    }
    if (this.state.error) {
      return <p>Internal error, try later...</p>;
    }
    return (
      <div>
        <div className="header">
          <h2 className="titleHeader">{this.props.topic} ARTICLES</h2>
        </div>
        <div className="previewArticlesContainer">
          <div className="interactWithArticles orderByGrid">
            <label>Order by:</label>
            <select onClick={e => this.handleClick(e.target.value)}>
              <option value="created_at">date created</option>
              <option value="comment_count">number of comments</option>
              <option value="votes">number of votes</option>
            </select>
          </div>
          <div className="articlesGrid">
            <ArticlesList
              list={this.state.articles}
              onChangePage={this.changePage}
              p={this.state.p}
              total_count={this.state.total_count}
              authors={this.props.authors}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.p !== this.state.p ||
      prevState.sort_by !== this.state.sort_by ||
      prevProps.topic !== this.props.topic ||
      prevProps.author !== this.props.author
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    getArticles({
      p: this.state.p,
      sort_by: this.state.sort_by,
      topic: this.props.topic,
      author: this.props.author
    })
      .then(({ articles, total_count }) => {
        this.setState({
          articles,
          total_count,
          loading: false
        });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  };

  handleClick = value => {
    this.setState({ sort_by: value, p: 1 });
  };

  changePage = direction => {
    this.setState(prevState => {
      return { p: prevState.p + direction };
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}

export default TopicArticles;
