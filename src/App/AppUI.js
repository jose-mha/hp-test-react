import Header from '../components/Header';
import Character from '../components/Character';
import Modal from '../components/Modal';
import CharacterForm from '../components/CharacterForm';
import title from '../assets/title.png';
import './App.scss';

import AppService from '../services/AppService';
import React, { useEffect } from 'react';

import { AppContext } from './context';

// import Counter from '../components/Counter';
function AppUI() {
  const { openModal, setOpenModal } = React.useContext(AppContext);
  const [listCharacters, setListCharacters] = React.useState([]);

  const getCharacters = async () => {
    const response = await AppService.getCharacters();
    console.log(response.data);
    setListCharacters(response.data);
  };
  const getStaff = async () => {
    const response = await AppService.getStaff();
    console.log(response.data);
    setListCharacters(response.data);
  };

  useEffect(() => {
    // getCharacters();
    console.log('Se ha renderizado el componente');
  }, [listCharacters]);
  return (
    <React.Fragment>
      <div className="Container">
        <Header setOpenModal={setOpenModal} />

        <div className="Container-title">
          <img className="Img-title" src={title} alt="title" />
        </div>
        <div className="Container-filtro">
          <h3>Selecciona tu filtro</h3>
        </div>
        <div className="Container-buttons">
          <button className="button" onClick={() => getCharacters()}>
            ESTUDIANTES
          </button>
          <button className="button" onClick={() => getStaff()}>
            STAFF
          </button>
        </div>

        <div className="Characters-container">
          {listCharacters.map((character) => (
            <Character key={character.name} character={character} />
          ))}
        </div>

        {!!openModal && (
          <Modal>
            <CharacterForm />
          </Modal>
        )}
        <br></br>
        {/* <Counter></Counter> */}
      </div>
    </React.Fragment>
  );
}

export default AppUI;
