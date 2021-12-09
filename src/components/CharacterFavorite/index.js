import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import avatar from '../../assets/avatar.png';
import './CharacterFavorite.scss';

function CharacterFavorite(props) {
  return (
    <div className={'container-favorite ' + props.status}>
      <div className="container-favorite-character">
        <div className="center">
          <img className="character-favorite-avatar" src={avatar} alt="avatar" />
        </div>
        <p className="center">Luna Lovegood</p>
        <h3 className="center">
          <FaTrashAlt />
        </h3>
      </div>
      <div className="separator"></div>
      <div className="container-favorite-character">
        <div className="center">
          <img className="character-favorite-avatar" src={avatar} alt="avatar" />
        </div>
        <p className="center">Luna Lovegood</p>
        <h3 className="center">
          <FaTrashAlt />
        </h3>
      </div>
      <div className="separator"></div>
      <div className="container-favorite-character">
        <div className="center">
          <img className="character-favorite-avatar" src={avatar} alt="avatar" />
        </div>
        <p className="center">Luna Lovegood</p>
        <h3 className="center">
          <FaTrashAlt />
        </h3>
      </div>
    </div>
  );
}

export default CharacterFavorite;
