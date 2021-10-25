import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsActive: false
    };
    this.handleModalTurnOn = this.handleModalTurnOn.bind(this);
    this.handleModalTurnOff = this.handleModalTurnOff.bind(this);
  }

  handleModalTurnOn() {
    this.setState({ modalIsActive: true });
  }

  handleModalDisplay() {
    return this.state.modalIsActive
      ? 'blackBox'
      : 'blackBox hidden';
  }

  handleModalTurnOff() {
    this.setState({ modalIsActive: false });
  }

  render() {
    return (
      <div>
        <div className='navButton'>
        <i onClick={this.handleModalTurnOn} className="fas fa-align-justify"></i>
          </div>
        <div className="container">
          <div className='bird'>
            <i className="fab fa-earlybirds"></i>
          </div>
        </div>

        <div onClick={this.handleModalTurnOff} className={this.handleModalDisplay()}>
          <div className="whiteBox">
        <section className="chooseAGame">
          <h1>Choose a Game</h1>
          <ul>
            <li onClick={this.handleModalTurnOff}>The Legend of Zelda</li>
                <li onClick={this.handleModalTurnOff}>A Link to the Past</li>
                <li onClick={this.handleModalTurnOff}>Ocarina of Time</li>
                <li onClick={this.handleModalTurnOff}>The Wind Waker</li>
                <li onClick={this.handleModalTurnOff}>Breath of the Wild</li>
          </ul>
        </section>
        </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
