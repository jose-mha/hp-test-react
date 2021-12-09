import React from 'react';
import avatar from '../../assets/avatar.png';
import favorite from '../../assets/icon-favorite.png';
import './Character.scss';

function Character() {
  return (
    <div className="Character-card">
      <div className="Character-avatar-container">
        <img className="Character-avatar" src={avatar} alt="avatar" />
      </div>
      <div className="Character-data-container">
        <div className="Character-header">
          <div className="Character-type">
            <p>VIVO</p>
            <p className="Character-type-separator">/</p>
            <p>ESTUDIANTE</p>
          </div>
          <img src={favorite} alt="favorite" />
        </div>
        <div className="Character-name">Harry Potter</div>
        <div className="Character-info">
          <p>Cumpleaños: 31-07-1980</p>
          <p>Género: Male</p>
          <p>Color de ojos: Green</p>
          <p>Color de pelo: Black</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
