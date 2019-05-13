import React from "react";

class SearchInput extends React.Component {
  state = { input: "" };

  render() {
    return (
      <div>
        <form>
          <input />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchInput;
