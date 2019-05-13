import React from "react";
import { Link } from "@reach/router";
import { fetchUser } from "../api";

class Header extends React.Component {
  state = {
    userLogIn: "",
    isLoggedIn: false
  };

  render() {
    if (this.state.isLoggedIn) {
      return <p>You have logged in!</p>;
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
    });
  };
}

export default Header;
