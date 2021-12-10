import React from 'react';
import CharacterFavorite from '../CharacterFavorite';
import './Favorites.scss';
function Favorites() {
  const characters = [
    {
      name: 'Harry Potter1',
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
    },
    {
      name: 'Harry Potter2',
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
    },
    {
      name: 'Harry Potter3',
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
    },
  ];

  return (
    <div className="container-favorite">
      {characters.map((character) => (
        <div>
          <CharacterFavorite key={character.name} character={character} />
          <div className="separator"></div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
