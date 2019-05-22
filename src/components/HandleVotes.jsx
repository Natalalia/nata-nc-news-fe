import React from "react";
import {
  TiArrowDownOutline,
  TiArrowUpOutline,
  TiArrowDownThick,
  TiArrowUpThick
} from "react-icons/ti";

class HandleVotes extends React.Component {
  state = {
    vote: 0
  };
  render() {
    return (
      <div>
        <span>Votes:{this.props.previousVotes + this.state.vote}</span>
        {this.props.loggedInUser ? (
          <div className="voteButtons">
            <button
              className="singleVoteButton"
              onClick={() => {
                if (this.state.vote === 1) {
                  this.handleVote(-1);
                } else {
                  this.handleVote(1);
                }
              }}
              disabled={this.state.vote === -1}
            >
              {this.state.vote === 1 ? (
                <TiArrowUpThick />
              ) : (
                <TiArrowUpOutline />
              )}
            </button>
            <button
              className="singleVoteButton"
              onClick={() => {
                if (this.state.vote === -1) {
                  this.handleVote(1);
                } else {
                  this.handleVote(-1);
                }
              }}
              disabled={this.state.vote === 1}
            >
              {this.state.vote === -1 ? (
                <TiArrowDownThick />
              ) : (
                <TiArrowDownOutline />
              )}
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
