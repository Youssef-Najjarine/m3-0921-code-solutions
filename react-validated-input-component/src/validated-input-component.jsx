import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isTooShort: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
    return this.state.password.length >= 7
      ? this.setState({ isTooShort: false })
      : this.setState({ isTooShort: true });
  }

  handleMessage() {
    return this.state.isTooShort
      ? 'your Password is too short'
      : '';
  }

  handleIcon() {
    return this.state.isTooShort
      ? 'fas fa-times red'
      : 'fas fa-check green';
  }

  render() {
    return (
      <form>
        <br/>
        <div>
        <label htmlFor="password">Password</label>
        <br/>
        <input
          name="password"
          id="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}/>
          <p>{this.handleMessage()}</p>
          </div>
        <i className={this.handleIcon()}></i>
      </form>
    );
  }
}

export default ValidatedInput;
