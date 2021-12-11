import React from 'react';
import CharacterFavorite from '../CharacterFavorite';
import './Favorites.scss';

import { useSelector } from 'react-redux';
// import { AppContext } from '../../App/context';

function Favorites() {
  // const { setCountFavorites } = React.useContext(AppContext);
  const characters = useSelector((state) => state.characterReducer);
  const favoritesIsEmpty = characters.length === 0;

  console.log('Favoritos', characters.length);

  return (
    <div className="container-favorite">
      {favoritesIsEmpty && (
        <div className="no-content">
          <h3>No hay personajes</h3>
        </div>
      )}
      {characters.map((character) => (
        <div key={character.name}>
          <CharacterFavorite character={character} />
          <div className="separator"></div>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
