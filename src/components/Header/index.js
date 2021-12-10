import React from 'react';

import favorite from '../../assets/icon-favorite.png';
import { FaUserPlus } from 'react-icons/fa';
import './Header.scss';
import Favorites from '../Favorites';

function Header({ setOpenModal }) {
  const [openFavorites, setOpenFavorites] = React.useState(false);

  return (
    <div className="header">
      <div className="navigation">
        <button className="button-header button-favorite" onClick={() => setOpenFavorites((prevState) => !prevState)}>
          FAVORITOS &nbsp;
          <img src={favorite} alt="favorite" />
        </button>
        <button className="button-header button-add" onClick={() => setOpenModal(true)}>
          AGREGAR &nbsp;
          <FaUserPlus />
        </button>
      </div>
      {!!openFavorites && <Favorites />}
    </div>
  );
}

export default Header;
