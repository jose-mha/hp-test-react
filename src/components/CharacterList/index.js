import React from 'react';
import Character from '../Character';
import './CharacterList.scss';

function CharacterList() {
  return (
    <div className="Characters-container">
      <Character />
      <Character />
      <Character />
      <Character />
    </div>
  );
}

export default CharacterList;
