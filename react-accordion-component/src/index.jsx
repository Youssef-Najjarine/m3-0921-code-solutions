import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    id: 1,
    title: 'HTML',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id impedit repellendus aliquid cum expedita, quis exercitationem repudiandae dicta atque a unde? Quidem, cupiditate magni. Dignissimos, repellendus reprehenderit. Nihil, asperiores.'
  },
  {
    id: 2,
    title: 'CSS3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id impedit repellendus aliquid cum expedita, quis exercitationem repudiandae dicta atque a unde? Quidem, cupiditate magni. Dignissimos, repellendus reprehenderit. Nihil, asperiores.'
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id impedit repellendus aliquid cum expedita, quis exercitationem repudiandae dicta atque a unde? Quidem, cupiditate magni. Dignissimos, repellendus reprehenderit. Nihil, asperiores.'
  }

];
ReactDOM.render(
  <Accordion topics={topics}/>,
  document.getElementById('root')
);
