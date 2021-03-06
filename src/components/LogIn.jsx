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
        <div className="userLoggedIn">
          <img
            data-cy="login-username-img"
            alt="avatar"
            src={this.props.avatar}
            height="50"
            width="50"
          />
          <span data-cy="login-username-name">{this.props.loggedInUser}</span>
          <button className="postButton" onClick={this.handleClick}>
            LOG OUT
          </button>
        </div>
      );
    }
    return (
      <form className="logIn" onSubmit={this.handleSubmit}>
        <label for="username">Username:</label>
        <input
          id="username"
          className="logInInput"
          placeholder="ex: grumpy19"
          onChange={this.handleChange}
          type="text"
        />
        <button data-cy="logIn-button" className="postButton">
          LOG IN
        </button>
        {!this.state.isExistingUser || this.state.isLoggedIn ? (
          <p data-cy="warning-username-msg">Please, enter a valid username!</p>
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
