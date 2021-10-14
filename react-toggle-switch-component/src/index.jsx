import React from 'react';
import ReactDom from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return !this.state.isOn
      ? this.setState({ isOn: true })
      : this.setState({ isOn: false });
  }

  handleLabelText() {
    return this.state.isOn
      ? 'ON'
      : 'OFF';
  }

  handleBackgroundColor() {
    return this.state.isOn
      ? 'green'
      : 'grey';
  }

  handleToggle() {
    return this.state.isOn
      ? 'dotOn'
      : 'dotOff';
  }

  render() {
    return (
      <section>
        <button className={this.handleBackgroundColor()} onClick={this.handleClick}></button>
        <label>{this.handleLabelText()}</label>
        <span className={this.handleToggle()} onClick={this.handleClick}></span>
      </section>
    );
  }
}

ReactDom.render(
  <ToggleSwitch/>,
  document.getElementById('root')
);
