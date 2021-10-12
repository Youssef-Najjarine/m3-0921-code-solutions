import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    this.message = 'Click Me!';
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
    if (!this.state.isClicked) {
      this.message = 'Thanks!';
    } else {
      this.message = 'Click Me!';
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.message}</button>
    );
  }
}

const element = (
    <CustomButton/>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
