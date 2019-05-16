import React from "react";
import { getTopics } from "../api";

class TopicsList extends React.Component {
  state = {
    topics: [],
    loading: true,
    error: false
  };
  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }
    if (this.state.error) {
      return <p>Try later...</p>;
    }
    return (
      <div>
        <h3 className="topicsListHeader">TOPICS:</h3>
        <ul className="topicsList">
          {this.state.topics.map((topic, i) => {
            return (
              <li key={i} onClick={() => this.handleClick(topic.slug)}>
                {topic.slug.toUpperCase()}
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

  handleClick = slug => {
    this.props.onSelect(slug);
  };
}

export default TopicsList;
