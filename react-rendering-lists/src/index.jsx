import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.pokedex = props.pokedex;
  }

  handleListItems() {
    const listItems = this.pokedex.map(pokemon =>
      <li key={pokemon.number}>{pokemon.name}</li>
    );
    return listItems;
  }

  render() {
    return (
      <ul>{this.handleListItems()}</ul>
    );
  }
}

ReactDOM.render(
  <PokemonList pokedex={pokedex}/>,
  document.getElementById('root')
);
