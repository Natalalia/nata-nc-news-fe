import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";

class App extends React.Component {
  state = {
    loggedInUser: ""
  };
  render() {
    return (
      <div className="App">
        <Header onLogIn={this.onLogIn} />
        <Router>
          <Home path="/" loggedInUser={this.state.loggedInUser} />
          <Articles path="/articles" loggedInUser={this.state.loggedInUser} />
          <Article
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
        </Router>
      </div>
    );
  }

  onLogIn = username => {
    this.setState({ loggedInUser: username });
  };
}

export default App;
