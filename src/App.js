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
import ShowError from "./components/ShowError";

class App extends React.Component {
  state = {
    loggedInUser: "",
    avatar: null
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
            <Articles path="/" loggedInUser={this.state.loggedInUser} />
            <Article
              path="/articles/:article_id"
              loggedInUser={this.state.loggedInUser}
            />
            <Topics path="/topics" loggedInUser={this.state.loggedInUser} />
            <PostArticle
              path="/new-article"
              loggedInUser={this.state.loggedInUser}
            />
            <AddTopic path="new-topic" loggedInUser={this.state.loggedInUser} />
            <Authors path="/authors" />
            <AuthorArticles path="/users/:username/articles" />
            <TopicArticles path="/topics/:topic" />
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
