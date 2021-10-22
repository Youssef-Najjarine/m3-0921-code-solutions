import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 0
    };
    this.topics = props.topics;
    this.handleButtonClicks = this.handleButtonClicks.bind(this);
  }

  handleButtonClicks(id) {
    return this.state.activeId === id
      ? this.setState({ activeId: 0 })
      : this.setState({ activeId: id });
  }

  handleTopicsDisplayed() {
    const topicItems = this.topics.map(topic =>
      <div key={topic.id}>
        <button onClick={() => this.handleButtonClicks(topic.id)}>{topic.title}</button>
        <p className={this.handleContentDisplayed(topic.id)}>{topic.content}</p>
      </div>
    );
    return topicItems;
  }

  handleContentDisplayed(id) {
    return this.state.activeId === id
      ? ''
      : 'hidden';
  }

  render() {
    return (
      <section className="container">
        <div className="buttonsAndText">{this.handleTopicsDisplayed()}</div>
      </section>
    );
  }
}

export default Accordion;
