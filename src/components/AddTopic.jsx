import React from "react";
import { submitTopic } from "../api";
import { navigate } from "@reach/router";

class AddTopic extends React.Component {
  state = {
    slug: "",
    description: ""
  };
  render() {
    if (!this.props.loggedInUser) {
      return <p>You must be logged in to add a topic</p>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="firstInput">
            <label for="topic">Topic:</label>
            <input
              id="topic"
              required
              value={this.state.slug}
              onChange={e => this.handleChange("slug", e.target.value)}
            />
          </div>
          <div className="secondInput">
            <label for="description">Description:</label>
            <input
              id="description"
              required
              value={this.state.description}
              onChange={e => this.handleChange("description", e.target.value)}
            />
          </div>
          <button className="submitButtonGrid postButton">
            Add New Topic!
          </button>
        </form>
      </div>
    );
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    submitTopic({
      slug: this.state.slug,
      description: this.state.description
    }).then(() => {
      navigate(`/topics`);
    });
  };
}

export default AddTopic;
