import React from "react";
import { navigate } from "@reach/router";
import { submitUser } from "../api";

class CreateUser extends React.Component {
  state = {
    username: "",
    avatar_url: "https://www.uic.mx/posgrados/files/2018/05/default-user.png",
    name: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              required
              value={this.state.name}
              onChange={e => this.handleChange("name", e.target.value)}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              required
              value={this.state.username}
              onChange={e => this.handleChange("username", e.target.value)}
            />
          </div>
          <div>
            <label>Avatar url:</label>
            <input
              value={this.state.avatar_url}
              onChange={e => this.handleChange("avatar_url", e.target.value)}
            />
          </div>
          <div>
            <button className="postButton">Create user!</button>
          </div>
        </form>
      </div>
    );
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    submitUser({
      username: this.state.username,
      avatar_url: this.state.avatar_url,
      name: this.state.name
    }).then(() => {
      navigate("/authors");
    });
  };
}

export default CreateUser;
