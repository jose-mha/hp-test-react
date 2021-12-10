import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './CharacterFavorite.scss';

import { removeFavorite } from '../../store/action';
import { useDispatch } from 'react-redux';

function CharacterFavorite(props) {
  const dispatch = useDispatch();

  const character = props.character;
  return (
    <div className="container-favorite-character">
      <div className="center">
        <img className="character-favorite-avatar" src={character.image} alt="avatar" />
      </div>
      <p className="center">{character.name}</p>
      <h3 className="center" onClick={() => dispatch(removeFavorite('Josemha'))}>
        <FaTrashAlt />
      </h3>
    </div>
  );
}

export default CharacterFavorite;
