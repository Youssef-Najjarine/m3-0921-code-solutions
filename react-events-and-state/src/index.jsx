import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      return this.setState({ isClicked: true });
    } else {
      return this.setState({ isClicked: false });
    }
  }

  render() {
    if (this.state.isClicked) {
      return (
        <button onClick={this.handleClick}>Thanks!</button>
      );
    } else {
      return (
        <button onClick={this.handleClick}>Click Me!</button>
      );
    }

  }
}

const element = (
    <CustomButton/>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
