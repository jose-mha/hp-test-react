import React from 'react';
import CharacterFavorite from '../CharacterFavorite';
import './Favorites.scss';

import { addFavorite } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';

function Favorites() {
  const characters = useSelector((state) => state.characterReducer);
  const dispatch = useDispatch();
  const img = 'http://hp-api.herokuapp.com/images/harry.jpg';
  return (
    <div className="container-favorite">
      <button onClick={() => dispatch(addFavorite('Josemha', img))}>Add Static</button>

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
