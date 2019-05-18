import React from "react";

class HandleVotes extends React.Component {
  state = {
    vote: 0
  };
  render() {
    return (
      <div>
        <span>Votes:{this.props.previousVotes + this.state.vote}</span>
        {this.props.loggedInUser ? (
          <div>
            <button
              onClick={() => {
                if (this.state.vote === 1) {
                  this.handleVote(-1);
                } else {
                  this.handleVote(1);
                }
              }}
              disabled={this.state.vote === -1}
            >
              like
            </button>
            <button
              onClick={() => {
                if (this.state.vote === -1) {
                  this.handleVote(1);
                } else {
                  this.handleVote(-1);
                }
              }}
              disabled={this.state.vote === 1}
            >
              dislike
            </button>
          </div>
        ) : null}
      </div>
    );
  }
  handleVote = direction => {
    this.props.onVote(direction);
    this.setState(prevState => {
      const newVote = prevState.vote + direction;
      return { vote: newVote };
    });
  };
}

export default HandleVotes;
