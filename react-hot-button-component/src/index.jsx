import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { incrementor: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const click = this.state.incrementor;
    this.setState({ incrementor: click + 1 });
  }

  getClassName() {
    return this.state.incrementor > 2 && this.state.incrementor < 6
      ? 'blue'
      : this.state.incrementor > 5 && this.state.incrementor < 9
        ? 'lightBlue'
        : this.state.incrementor > 8 && this.state.incrementor < 12
          ? 'red'
          : this.state.incrementor > 11 && this.state.incrementor < 15
            ? 'orange'
            : this.state.incrementor > 14 && this.state.incrementor < 18
              ? 'yellow'
              : this.state.incrementor >= 18
                ? 'white'
                : 'none';
  }

  render() {
    return (
      <button className={this.getClassName()} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

ReactDOM.render(
  <HotButton/>,
  document.getElementById('root')
);
