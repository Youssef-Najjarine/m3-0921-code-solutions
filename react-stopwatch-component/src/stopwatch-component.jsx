import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentNumber: 0
    };
    this.timer = 0;
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handlePlayPause() {
    if (this.state.isPlaying) {
      this.setState({ isPlaying: false });
      clearInterval(this.timer);
    } else {
      this.setState({ isPlaying: true });
      this.timer = setInterval(() => {
        this.setState({ currentNumber: this.state.currentNumber + 1 });
      }, 1000);
    }
  }

  hndleIconClass() {
    return this.state.isPlaying
      ? 'fas fa-pause'
      : 'fas fa-play';
  }

  resetTimer() {
    clearInterval(this.timer);
    this.setState({ currentNumber: 0, isPlaying: false });
  }

  render() {
    return (
      <section className="container">
        <h1 className="circle" onClick={this.resetTimer}>{this.state.currentNumber}</h1>
        <i className={this.hndleIconClass()} onClick={this.handlePlayPause}></i>
      </section>
    );
  }
}
export default StopWatch;
