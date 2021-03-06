import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import PostArticle from "./components/PostArticle";
import Topics from "./components/Topics";
import AddTopic from "./components/AddTopic";
import Authors from "./components/Authors";
import AuthorArticles from "./components/AuthorArticles";
import TopicArticles from "./components/TopicArticles";
import CreateUser from "./components/CreateUser";
import ShowError from "./components/ShowError";
import { getAuthors } from "./api";

class App extends React.Component {
  state = {
    loggedInUser: "",
    avatar: null,
    authors: []
  };
  render() {
    return (
      <div className="App">
        <div className="site-container">
          <Header
            onLogIn={this.onLogIn}
            onLogOut={this.onLogOut}
            loggedInUser={this.state.loggedInUser}
            avatar={this.state.avatar}
          />
          <Router>
            <Articles
              path="/"
              loggedInUser={this.state.loggedInUser}
              authors={this.state.authors}
            />
            <Article
              path="/articles/:article_id"
              loggedInUser={this.state.loggedInUser}
              avatar={this.state.avatar}
              authors={this.state.authors}
            />
            <Topics path="/topics" loggedInUser={this.state.loggedInUser} />
            <PostArticle
              path="/new-article"
              loggedInUser={this.state.loggedInUser}
            />
            <AddTopic path="new-topic" loggedInUser={this.state.loggedInUser} />
            <Authors path="/authors" />
            <AuthorArticles
              path="/users/:username/articles"
              authors={this.state.authors}
            />
            <TopicArticles path="/topics/:topic" authors={this.state.authors} />
            <CreateUser path="/create-user" />
            <ShowError default />
          </Router>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const storedUser = localStorage.getItem("loggedInUser");
    const storedAvatar = localStorage.getItem("avatar");
    if (storedUser && storedAvatar) {
      this.setState({ loggedInUser: storedUser, avatar: storedAvatar });
    }
    getAuthors()
      .then(authors => {
        this.setState({ authors, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }

  onLogIn = (username, avatar_url) => {
    this.setState({ loggedInUser: username, avatar: avatar_url }, () => {
      localStorage.setItem("loggedInUser", this.state.loggedInUser);
      localStorage.setItem("avatar", this.state.avatar);
    });
  };

  onLogOut = () => {
    this.setState({ loggedInUser: "" }, () => {
      localStorage.setItem("loggedInUser", "");
      localStorage.setItem("avatar", null);
    });
  };
}

export default App;
