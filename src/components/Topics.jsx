import React from "react";
import { getTopics } from "../api";
import TopicsHeader from "./TopicsHeader";
import TopicCard from "./TopicCard";

class Topics extends React.Component {
  state = {
    topics: [],
    loading: true,
    error: false
  };
  render() {
    if (this.state.loading) {
      return <p>Loading ...</p>;
    }
    if (this.state.error) {
      return <p>Internal error, try later...</p>;
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
    getTopics()
      .then(topics => {
        this.setState({ topics, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }
}

export default Topics;
