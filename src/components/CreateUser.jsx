import React from "react";
import { navigate } from "@reach/router";
import { submitUser } from "../api";

class CreateUser extends React.Component {
  state = {
    username: "",
    avatar_url: "",
    name: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="firstInput">
            <label for="name">Name*:</label>
            <input
              id="name"
              required
              value={this.state.name}
              onChange={e => this.handleChange("name", e.target.value)}
            />
          </div>
          <div className="secondInput">
            <label for="user">Username*:</label>
            <input
              id="user"
              required
              value={this.state.username}
              onChange={e => this.handleChange("username", e.target.value)}
            />
          </div>
          <div className="thirdInput">
            <label for="avatar">Avatar url:</label>
            <input
              placeholder="https://image.jpg .png"
              type="url"
              id="avatar"
              value={this.state.avatar_url}
              onChange={e => this.handleChange("avatar_url", e.target.value)}
            />
          </div>
          <div className="createButtonGrid">
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
    let avatar = "https://www.uic.mx/posgrados/files/2018/05/default-user.png";
    if (this.state.avatar_url) {
      avatar = this.state.avatar_url;
    }
    submitUser({
      username: this.state.username,
      avatar_url: avatar,
      name: this.state.name
    }).then(() => {
      navigate("/authors");
    });
  };
}

export default CreateUser;
