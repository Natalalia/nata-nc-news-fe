import React from "react";
import { submitTopic } from "../api";
import { navigate } from "@reach/router";

class AddTopic extends React.Component {
  state = {
    slug: "",
    description: ""
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Topic:</label>
          <input
            value={this.state.slug}
            onChange={e => this.handleChange("slug", e.target.value)}
          />
          <br />
          <label>Description:</label>
          <input
            value={this.state.description}
            onChange={e => this.handleChange("description", e.target.value)}
          />
          <br />
          <button>Add New Topic!</button>
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
