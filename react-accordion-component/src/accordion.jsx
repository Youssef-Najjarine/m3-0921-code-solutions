import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenButtonDisplayed: ''
    };
    this.handleHTMLButton = this.handleHTMLButton.bind(this);
    this.handleCSSButton = this.handleCSSButton.bind(this);
    this.handleJSButton = this.handleJSButton.bind(this);
  }

  handleHTMLButton(event) {
    if (event.target.className === 'active') {
      event.target.className = '';
      this.setState({ currenButtonDisplayed: '' });
    } else {
      event.target.className = 'active';
      this.setState({ currenButtonDisplayed: 'HML' });
    }
  }

  handleCSSButton(event) {
    if (event.target.className === 'active') {
      event.target.className = '';
      this.setState({ currenButtonDisplayed: '' });
    } else {
      event.target.className = 'active';
      this.setState({ currenButtonDisplayed: 'CSS' });
    }
  }

  handleJSButton(event) {
    if (event.target.className === 'active') {
      event.target.className = '';
      this.setState({ currenButtonDisplayed: '' });
    } else {
      event.target.className = 'active';
      this.setState({ currenButtonDisplayed: 'JS' });
    }
  }

  handleHypertextMarkupLanguageText() {
    return this.state.currenButtonDisplayed === 'HML'
      ? ''
      : 'hidden';
  }

  handleCascadingStyleSheetsText() {
    return this.state.currenButtonDisplayed === 'CSS'
      ? ''
      : 'hidden';
  }

  handleJavaScriptText() {
    return this.state.currenButtonDisplayed === 'JS'
      ? ''
      : 'hidden';
  }

  render() {
    return (
      <section id="container">
        <div id="buttonsAndText">
          <button onClick={this.handleHTMLButton}>Hypertext Markup Language</button>
          <p className={this.handleHypertextMarkupLanguageText()}>
            typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release
             of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software
             like Aldus PageMaker including versions of Lorem Ipsum.
            typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
             </p>
          <button onClick={this.handleCSSButton}>Cascading Style Sheets</button>
          <p className={this.handleCascadingStyleSheetsText()}>
            typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button onClick={this.handleJSButton}>JavaScript</button>
          <p className={this.handleJavaScriptText()}>
            typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
            typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
    );
  }
}

export default Accordion;
