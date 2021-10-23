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

// import React from 'react';

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.pictures = props.pictures;
//     this.state = {
//       activeId: this.pictures[0].id
//     };
//     this.incrementor = 1;
//     this.currentPicture = this.pictures[0].picture;
//     this.timer = 0;
//     this.handleRightAngle = this.handleRightAngle.bind(this);
//     this.handleLeftAngle = this.handleLeftAngle.bind(this);
//   }

//   componentDidMount() {
//     // this.timer = setInterval(() => {
//     //   if (this.incrementor !== this.pictures.length) {
//     //     this.setState({ activeId: this.pictures[this.incrementor].id });
//     //     this.incrementor++;
//     //   } else {
//     //     this.incrementor = 0;
//     //   }
//     //   console.log('3 seconds.');
//     // }, 3000);
//   }

//   handleLeftAngle() {
//     clearInterval(this.timer);

//     this.timer = setInterval(() => {

//     }, 3000);
//   }

//   handleRightAngle() {
//     clearInterval(this.timer);

//     this.timer = setInterval(() => {
//       return this.state.currentPicture === 1
//         ? this.setState({ currentPicture: 2 })
//         : this.state.currentPicture === 2
//           ? this.setState({ currentPicture: 3 })
//           : this.state.currentPicture === 3
//             ? this.setState({ currentPicture: 4 })
//             : this.state.currentPicture === 4
//               ? this.setState({ currentPicture: 5 })
//               : this.state.currentPicture === 5
//                 ? this.setState({ currentPicture: 1 })
//                 : 1;
//     }, 3000);
//   }

//   handleDotsDisplayed() {
//     const dots = this.pictures.map(picture =>
//       <i key={picture.id} className={this.handleDotClassName(picture)}></i>
//     );
//     return dots;
//   }

//   handleDotClassName(pictureObject) {
//     if (this.state.activeId === pictureObject.id) {
//       this.currentPicture = pictureObject.picture;
//       return 'fas fa-circle';
//     } else {
//       return 'far fa-circle';
//     }
//   }

//   render() {
//     console.log('this.currentPicture:', this.currentPicture);
//     return (
//       <section className="container">
//         <div className="row">
//           <div className="column-third">
//             <i className="fas fa-angle-left" onClick={this.handleLeftAngle}></i>
//           </div>
//           <div className="column-third">
//             <div>
//             <img src={this.currentPicture}/>
//             <div className="row">{this.handleDotsDisplayed()}</div>
//             </div>
//           </div>
//           <div className="column-third">
//             <i className="fas fa-angle-right" onClick={this.handleRightAngle}></i>
//           </div>
//         </div>

//       </section>
//     );
//   }
// }

// export default Carousel;
