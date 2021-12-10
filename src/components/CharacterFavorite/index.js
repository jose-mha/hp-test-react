import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './CharacterFavorite.scss';

function CharacterFavorite(props) {
  const character = props.character;
  return (
    <div className="container-favorite-character">
      <div className="center">
        <img className="character-favorite-avatar" src={character.image} alt="avatar" />
      </div>
      <p className="center">{character.name}</p>
      <h3 className="center">
        <FaTrashAlt />
      </h3>
    </div>
  );
}

export default CharacterFavorite;
