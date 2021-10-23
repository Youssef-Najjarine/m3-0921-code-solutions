import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.pictures = props.pictures;
    this.state = {
      incrementor: 0
    };

    this.timer = 0;
    this.handleRightAngle = this.handleRightAngle.bind(this);
    this.handleLeftAngle = this.handleLeftAngle.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.incrementor === this.pictures.length - 1) {
        this.setState({ incrementor: 0 });
      } else {
        this.setState({ incrementor: this.state.incrementor + 1 });
      }
    }, 3000);
  }

  handleLeftAngle() {
    clearInterval(this.timer);
    if (this.state.incrementor === 0) {
      this.setState({ incrementor: this.pictures.length - 1 });
    } else {
      this.setState({ incrementor: this.state.incrementor - 1 });
    }
    this.timer = setInterval(() => {
      if (this.state.incrementor === this.pictures.length - 1) {
        this.setState({ incrementor: 0 });
      } else {
        this.setState({ incrementor: this.state.incrementor + 1 });
      }
    }, 3000);
  }

  handleRightAngle() {
    clearInterval(this.timer);
    if (this.state.incrementor === this.pictures.length - 1) {
      this.setState({ incrementor: 0 });
    } else {
      this.setState({ incrementor: this.state.incrementor + 1 });
    }
    this.timer = setInterval(() => {
      if (this.state.incrementor === this.pictures.length - 1) {
        this.setState({ incrementor: 0 });
      } else {
        this.setState({ incrementor: this.state.incrementor + 1 });
      }
    }, 3000);
  }

  handleDotsDisplayed() {
    const dots = this.pictures.map((picture, index) =>
      <div key={picture.id} className='circles'>
        <i className={this.handleDotClassName(index)} onClick={() => this.handleDotClick(index)}></i>
      </div>
    );
    return dots;
  }

  handleDotClick(index) {
    clearInterval(this.timer);
    this.setState({ incrementor: index });
    this.timer = setInterval(() => {
      if (this.state.incrementor === this.pictures.length - 1) {
        this.setState({ incrementor: 0 });
      } else {
        this.setState({ incrementor: this.state.incrementor + 1 });
      }
    }, 3000);
  }

  handleDotClassName(index) {
    if (this.state.incrementor === index) {
      return 'fas fa-circle';
    } else {
      return 'far fa-circle';
    }
  }

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="column-third">
            <div className='angle-Left'>
              <i className="fas fa-angle-left" onClick={this.handleLeftAngle}></i>
            </div>
          </div>
          <div className="column-third">
            <div>
              <img src={this.pictures[this.state.incrementor].picture} />
              <div className="row">{this.handleDotsDisplayed()}</div>
            </div>
          </div>
          <div className="column-third">
            <div className='angle-Right'>
              <i className="fas fa-angle-right" onClick={this.handleRightAngle}></i>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Carousel;
