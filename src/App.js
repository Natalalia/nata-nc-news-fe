import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Articles path="/articles" />
          <Article path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
