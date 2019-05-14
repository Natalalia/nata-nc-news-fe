import React from "react";
import { fetchUser } from "../api";

class LogIn extends React.Component {
  state = {
    userLogIn: "",
    isLoggedIn: false
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <p>You have logged in!</p>
          <button onClick={this.handleClick}>LOG OUT</button>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input
          value={this.state.userLogIn}
          onChange={this.handleChange}
          type="text"
        />
        <button>LOG IN</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ userLogIn: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetchUser(this.state.userLogIn).then(user => {
      this.setState({ isLoggedIn: true });
      this.props.onLogIn(user.username);
    });
  };

  handleClick = () => {
    this.setState({ userLogIn: "", isLoggedIn: false });
    this.props.onLogOut("");
  };
}

export default LogIn;
