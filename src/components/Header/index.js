import React from 'react';

import favorite from '../../assets/icon-favorite.png';
import { FaUserPlus } from 'react-icons/fa';
import './Header.scss';
import Favorites from '../Favorites';
import { AppContext } from '../../App/context';

function Header({ setOpenModal }) {
  const { showFavorites, setShowFavorites } = React.useContext(AppContext);

  return (
    <div className="header">
      <div className="navigation">
        <button className="button-header button-favorite" onClick={() => setShowFavorites((prevState) => !prevState)}>
          FAVORITOS &nbsp;
          <img src={favorite} alt="favorite" />
        </button>
        <button className="button-header button-add" onClick={() => setOpenModal(true)}>
          AGREGAR &nbsp;
          <FaUserPlus />
        </button>
      </div>
      {!!showFavorites && <Favorites />}
    </div>
  );
}

export default Header;
