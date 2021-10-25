import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pictures = [
  {
    id: 1,
    picture: 'images/1.png'
  },
  {
    id: 2,
    picture: 'images/2.png'
  },
  {
    id: 3,
    picture: 'images/3.png'
  },
  {
    id: 4,
    picture: 'images/4.png'
  },
  {
    id: 5,
    picture: 'images/5.png'
  }

];
ReactDOM.render(
  <Carousel pictures={pictures}/>,
  document.getElementById('root')
);
