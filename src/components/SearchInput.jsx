import React from "react";

class SearchInput extends React.Component {
  state = { input: "" };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button>Search</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onApply(this.state.input);
  };
}

export default SearchInput;
