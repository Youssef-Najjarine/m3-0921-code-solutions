import React from 'react';
import ReactDOM from 'react-dom';
const div = document.querySelector('div');
const h1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
ReactDOM.render(
  h1,
  div
);
