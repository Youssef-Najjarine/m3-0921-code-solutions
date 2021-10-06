import React from 'react';
import ReactDom from 'react-dom';

function customButton() {
  return <button>Click Me!</button>;
}

ReactDom.render(customButton(), document.querySelector('#root'));
