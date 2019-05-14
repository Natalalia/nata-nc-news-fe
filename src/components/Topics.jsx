import React from "react";
import { getTopics } from "../api";
import TopicsHeader from "./TopicsHeader";
import TopicCard from "./TopicCard";

class Topics extends React.Component {
  state = {
    topics: [],
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <TopicsHeader loggedInUser={this.props.loggedInUser} />
        <ul>
          {this.state.topics.map(topic => {
            return (
              <li key={topic.slug}>
                <TopicCard listTopic={topic} />
              </li>
            );
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

export default Topics;
