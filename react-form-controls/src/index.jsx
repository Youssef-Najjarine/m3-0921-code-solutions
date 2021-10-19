import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('State:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input onChange={this.handleChange} value={this.state.email} type="text"/>
        </label>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.getElementById('root')
);
