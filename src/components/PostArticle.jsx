import React from "react";

class PostArticle extends React.Component {
  state = {
    author: "",
    title: "",
    body: "",
    topic: "",
    loading: true
  };
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    return <p>Hi: {this.state.author}</p>;
  }

  componentDidMount() {
    this.setState({ author: this.props.loggedInUser, loading: false });
  }
}

export default PostArticle;
