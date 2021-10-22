import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 1
    };
    this.timer = 0;
    this.handleRightAngle = this.handleRightAngle.bind(this);
    this.handleLeftAngle = this.handleLeftAngle.bind(this);
    this.handleDot1Click = this.handleDot1Click.bind(this);
    this.handleDot2Click = this.handleDot2Click.bind(this);
    this.handleDot3Click = this.handleDot3Click.bind(this);
    this.handleDot4Click = this.handleDot4Click.bind(this);
    this.handleDot5Click = this.handleDot5Click.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  handlePicture() {
    return this.state.currentPicture === 1
      ? 'images/1.png'
      : this.state.currentPicture === 2
        ? 'images/2.png'
        : this.state.currentPicture === 3
          ? 'images/3.png'
          : this.state.currentPicture === 4
            ? 'images/4.png'
            : this.state.currentPicture === 5
              ? 'images/5.png'
              : '';
  }

  handleLeftAngle() {
    clearInterval(this.timer);
    if (this.state.currentPicture === 1) {
      this.setState({ currentPicture: 5 });
    } else if (this.state.currentPicture === 2) {
      this.setState({ currentPicture: 1 });
    } else if (this.state.currentPicture === 3) {
      this.setState({ currentPicture: 2 });
    } else if (this.state.currentPicture === 4) {
      this.setState({ currentPicture: 3 });
    } else if (this.state.currentPicture === 5) {
      this.setState({ currentPicture: 4 });
    }
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  handleRightAngle() {
    clearInterval(this.timer);
    if (this.state.currentPicture === 1) {
      this.setState({ currentPicture: 2 });
    } else if (this.state.currentPicture === 2) {
      this.setState({ currentPicture: 3 });
    } else if (this.state.currentPicture === 3) {
      this.setState({ currentPicture: 4 });
    } else if (this.state.currentPicture === 4) {
      this.setState({ currentPicture: 5 });
    } else if (this.state.currentPicture === 5) {
      this.setState({ currentPicture: 1 });
    }
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  handleDot1() {
    return this.state.currentPicture === 1
      ? 'fas fa-circle'
      : 'far fa-circle';
  }

  handleDot2() {
    return this.state.currentPicture === 2
      ? 'fas fa-circle'
      : 'far fa-circle';
  }

  handleDot3() {
    return this.state.currentPicture === 3
      ? 'fas fa-circle'
      : 'far fa-circle';
  }

  handleDot4() {
    return this.state.currentPicture === 4
      ? 'fas fa-circle'
      : 'far fa-circle';
  }

  handleDot5() {
    return this.state.currentPicture === 5
      ? 'fas fa-circle'
      : 'far fa-circle';
  }

  handleDot1Click() {
    clearInterval(this.timer);
    this.setState({ currentPicture: 1 });
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  handleDot2Click() {
    clearInterval(this.timer);
    this.setState({ currentPicture: 2 });
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  handleDot3Click() {
    clearInterval(this.timer);
    this.setState({ currentPicture: 3 });
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  handleDot4Click() {
    clearInterval(this.timer);
    this.setState({ currentPicture: 4 });
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  handleDot5Click() {
    clearInterval(this.timer);
    this.setState({ currentPicture: 5 });
    this.timer = setInterval(() => {
      return this.state.currentPicture === 1
        ? this.setState({ currentPicture: 2 })
        : this.state.currentPicture === 2
          ? this.setState({ currentPicture: 3 })
          : this.state.currentPicture === 3
            ? this.setState({ currentPicture: 4 })
            : this.state.currentPicture === 4
              ? this.setState({ currentPicture: 5 })
              : this.state.currentPicture === 5
                ? this.setState({ currentPicture: 1 })
                : 1;
    }, 3000);
  }

  render() {
    return (
      <section id="container">
        <div id="row">
          <div id="column-third">
            <i className="fas fa-angle-left" onClick={this.handleLeftAngle}></i>
          </div>
          <div id="column-third">
            <img src={this.handlePicture()}/>
          </div>
          <div id="column-third">
            <i className="fas fa-angle-right" onClick={this.handleRightAngle}></i>
          </div>
        </div>
        <div id="row">
          <i className={this.handleDot1()} onClick={this.handleDot1Click}></i>
          <i className={this.handleDot2()} onClick={this.handleDot2Click}></i>
          <i className={this.handleDot3()} onClick={this.handleDot3Click}></i>
          <i className={this.handleDot4()} onClick={this.handleDot4Click}></i>
          <i className={this.handleDot5()} onClick={this.handleDot5Click}></i>
        </div>
      </section>
    );
  }
}

export default Carousel;
