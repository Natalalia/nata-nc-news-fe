import React from "react";
import { getTopics } from "../api";

class TopicsList extends React.Component {
  state = {
    topics: [],
    selectedTopic: null,
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h3>TOPICS:</h3>
        <ul>
          {this.state.topics.map((topic, i) => {
            return <li key={i}>{topic.slug}</li>;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics, loading: false });
    });
  }
}

export default TopicsList;
