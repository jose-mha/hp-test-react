import React from 'react';
import CharacterFavorite from '../CharacterFavorite';
import favorite from '../../assets/icon-favorite.png';
import { FaUserPlus } from 'react-icons/fa';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="navigation">
        <button className="button-header button-favorite">
          FAVORITOS &nbsp;
          <img src={favorite} alt="favorite" />
        </button>
        <button className="button-header button-add">
          AGREGAR &nbsp;
          <FaUserPlus />
        </button>
      </div>
      <CharacterFavorite />
    </div>
  );
}

export default Header;
