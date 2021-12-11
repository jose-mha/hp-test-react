import React from 'react';
import favorite from '../../assets/icon-favorite.png';
import favoriteColor from '../../assets/icon-favorite-color.png';
import { FaCross } from 'react-icons/fa';
import './Character.scss';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../store/action';
import { AppContext } from '../../App/context';

function Character(props) {
  const { setShowFavorites } = React.useContext(AppContext);

  const dispatch = useDispatch();

  const character = props.character;
  const personaje = 'Harry Potter';

  const addCharacterFavorite = (character) => {
    console.log('Agregando a favoritos', character.name);
    dispatch(addFavorite(character.name, character.image));
    setShowFavorites(true);
  };

  return (
    <div className={'Character-card ' + (!character.alive ? 'Character-not-alive' : '')}>
      <div className={'Character-avatar-container Character-avatar-color-' + (character.house ? character.house : 'Other')}>
        <img className="Character-avatar" src={character.image} alt="avatar" />
      </div>
      <div className="Character-data-container">
        <div className="Character-header">
          <div className="Character-type">
            <p>{character.alive ? 'VIVO' : 'FINADO'}</p>
            <p className="Character-type-separator">/</p>
            <p>{character.hogwartsStudent ? 'ESTUDIANTE' : character.hogwartsStaff ? 'STAFF' : ''}</p>
          </div>
          <span onClick={() => addCharacterFavorite(character)}>
            <img src={character.name === personaje ? favoriteColor : favorite} alt="favorite" />
          </span>
        </div>
        <div className="Character-name">
          {!character.alive && <FaCross style={{ fontSize: '20px' }} />}
          &nbsp;
          {character.name}
        </div>
        <div className="Character-info">
          <p>
            <strong>Cumpleaños:</strong> {character.dateOfBirth}
          </p>
          <p>
            <strong>Género:</strong> {character.gender}
          </p>
          <p>
            <strong>Color de ojos:</strong> {character.eyeColour}
          </p>
          <p>
            <strong>Color de pelo:</strong> {character.hairColour}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Character;
