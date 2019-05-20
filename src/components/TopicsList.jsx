import React from "react";
import { getTopics } from "../api";

class TopicsList extends React.Component {
  state = {
    topics: [],
    selectedTopic: "",
    loading: true,
    error: false
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <p>Loading ...</p>
        </div>
      );
    }
    if (this.state.error) {
      return <p>Try later...</p>;
    }
    return (
      <div>
        <h3 className="topicsListHeader">TOPICS:</h3>
        <ul className="topicsList">
          <li
            className={!this.state.selectedTopic ? "activeTopic" : null}
            key={"ALL"}
            onClick={() => this.handleClick("")}
          >
            ALL
          </li>
          {this.state.topics.map(topic => {
            return (
              <li
                className={
                  topic.slug === this.state.selectedTopic ? "activeTopic" : null
                }
                key={topic.slug}
                onClick={() => this.handleClick(topic.slug)}
              >
                {topic.slug.toUpperCase()}
              </li>
            );
          })}
        </ul>
        <div className="scrollDownTopicList">
          <label>Topic:</label>
          <select
            value={this.state.selectedTopic}
            onChange={e => this.handleChange(e.target.value)}
          >
            <option value="">----</option>
            {this.state.topics.map(topic => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug.toLowerCase()}
                </option>
              );
            })}
          </select>
        </div>
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
    this.setState({ selectedTopic: slug });
  };

  handleChange = slug => {
    this.props.onSelect(slug);
    this.setState({ selectedTopic: slug });
  };
}

export default TopicsList;
