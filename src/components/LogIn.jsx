import React from "react";
import { fetchUser } from "../api";

class LogIn extends React.Component {
  state = {
    userLogIn: null,
    isLoggedIn: false,
    isExistingUser: true
  };

  render() {
    if (this.state.isLoggedIn || this.props.loggedInUser) {
      return (
        <div>
          <img alt="avatar" src={this.props.avatar} height="75" width="75" />
          <p>You are logged in as {this.props.loggedInUser}</p>
          <button onClick={this.handleClick}>LOG OUT</button>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input
          placeholder="ex: grumpy19"
          onChange={this.handleChange}
          type="text"
        />
        <button>LOG IN</button>
        {!this.state.isExistingUser || this.state.isLoggedIn ? (
          <p>Please, enter a valid username!</p>
        ) : null}
      </form>
    );
  }

  handleChange = event => {
    this.setState({ userLogIn: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetchUser(this.state.userLogIn)
      .then(user => {
        this.setState({ isLoggedIn: true });
        this.props.onLogIn(user.username, user.avatar_url);
      })
      .catch(() => {
        this.setState({ isExistingUser: false, isLoggedIn: false });
      });
  };

  handleClick = () => {
    this.setState({ userLogIn: "", isLoggedIn: false, isExistingUser: true });
    this.props.onLogOut("");
  };
}

export default LogIn;
