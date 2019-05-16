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
          removeComment={this.removeComment}
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

  removeComment = comment_id => {
    const newComments = this.state.comments.slice();
    const index = newComments.findIndex(
      comment => comment.comment_id === comment_id
    );
    newComments.splice(index, 1);
    this.setState({ comments: newComments });
  };
}

export default Comments;
