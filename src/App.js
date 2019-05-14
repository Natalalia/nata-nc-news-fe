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

class App extends React.Component {
  state = {
    loggedInUser: ""
  };
  render() {
    return (
      <div className="App">
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
          <AddTopic path="new-topic" />
        </Router>
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
