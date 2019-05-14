import React from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

class CommentsList extends React.Component {
  state = {
    comments: []
  };
  render() {
    return (
      <ul>
        {this.state.comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    getComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }
}

export default CommentsList;
