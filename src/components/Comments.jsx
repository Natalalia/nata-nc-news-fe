import React from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { getComments } from "../api";

class Comments extends React.Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <CommentsList
          article_id={this.props.article_id}
          loggedInUser={this.props.loggedInUser}
          comments={this.state.comments}
        />
        <AddComment
          addComment={this.addComment}
          article_id={this.props.article_id}
          loggedInUser={this.props.loggedInUser}
        />
      </div>
    );
  }

  componentDidMount() {
    getComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }

  addComment = comment => {
    const newComments = this.state.comments.slice();
    newComments.push(comment);
    this.setState({ comments: newComments });
  };
}

export default Comments;