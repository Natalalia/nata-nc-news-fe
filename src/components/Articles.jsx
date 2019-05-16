import React from "react";
import ArticlesList from "./ArticlesList";
import ArticlesHeader from "./ArticlesHeader";
import TopicsList from "./TopicsList";
import { getArticles } from "../api";

class Articles extends React.Component {
  state = {
    articles: [],
    total_count: 0,
    p: 1,
    sort_by: null,
    topic: null,
    author: this.props.author,
    loading: true,
    error: false
  };
  render() {
    if (this.state.loading) {
      return <p>Loading ...</p>;
    }
    if (this.state.error) {
      return <p>Internal error, try later...</p>;
    }
    return (
      <div>
        <ArticlesHeader
          loggedInUser={this.props.loggedInUser}
          author={this.props.author}
        />
        <div className="previewArticlesContainer">
          <TopicsList onSelect={this.onSelect} />
          <div>
            <div className="interactWithArticles">
              <label>Order by:</label>
              <select onClick={e => this.handleClick(e.target.value)}>
                <option value="">- - -</option>
                <option value="created_at">date created</option>
                <option value="comment_count">number of comments</option>
                <option value="votes">number of votes</option>
              </select>
            </div>
            <ArticlesList list={this.state.articles} />
            <button
              onClick={() => {
                this.changePage(-1);
              }}
              disabled={this.state.p === 1}
            >
              prev
            </button>
            <button
              onClick={() => {
                this.changePage(1);
              }}
              disabled={this.state.p === Math.ceil(this.state.total_count / 10)}
            >
              next
            </button>
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
      prevState.topic !== this.state.topic ||
      prevState.author !== this.state.author
    ) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    getArticles({
      p: this.state.p,
      sort_by: this.state.sort_by,
      topic: this.state.topic,
      author: this.state.author
    })
      .then(data => {
        this.setState({
          articles: data.articles,
          total_count: data.total_count,
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

  onSelect = topic => {
    this.setState({ topic, p: 1 });
  };

  changePage = direction => {
    this.setState(prevState => {
      return { p: prevState.p + direction };
    });
  };
}

export default Articles;
