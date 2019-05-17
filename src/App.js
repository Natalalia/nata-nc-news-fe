import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import PostArticle from "./components/PostArticle";
import Topics from "./components/Topics";
import AddTopic from "./components/AddTopic";
import Authors from "./components/Authors";
import AuthorArticles from "./components/AuthorArticles";
import ShowError from "./components/ShowError";

class App extends React.Component {
  state = {
    loggedInUser: ""
  };
  render() {
    return (
      <div className="App">
        <div className="site-container">
          <Header onLogIn={this.onLogIn} onLogOut={this.onLogOut} />
          <Router>
            <Home path="/" loggedInUser={this.state.loggedInUser} />
            <Articles path="/articles" loggedInUser={this.state.loggedInUser} />
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
            <AuthorArticles path="/author/articles" />
            <ShowError default />
          </Router>
        </div>
      </div>
    );
  }

  onLogIn = username => {
    this.setState({ loggedInUser: username });
  };

  onLogOut = () => {
    this.setState({ loggedInUser: "" });
  };
}

export default App;
