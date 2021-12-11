import Header from '../components/Header';
import Character from '../components/Character';
import Modal from '../components/Modal';
import CharacterForm from '../components/CharacterForm';
import title from '../assets/title.png';
import './App.scss';

import AppService from '../services/AppService';
import React, { useEffect } from 'react';

import { AppContext } from './context';
import Dialog from '../components/Dialog';

function AppUI() {
  const { openModal, setOpenModal, openDialog, setOpenDialog, message, setMessage } = React.useContext(AppContext);
  const [listCharacters, setListCharacters] = React.useState([]);

  const getDatas = async (filter) => {
    try {
      let response;
      if (filter === 'students') response = await AppService.getCharacters();
      else response = await AppService.getStaff();

      if (response.status === 200) {
        setListCharacters(response.data);
      } else {
        setOpenDialog(true);
        setMessage('Hubo un inconveniente al obtener los datos');
      }
    } catch (error) {
      setOpenDialog(true);
      setMessage('Upps, hubo un error al obtener los datos');
    }
  };

  useEffect(() => {
    // console.log('Se ha renderizado el componente');
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
          <button className="button" onClick={() => getDatas('students')}>
            ESTUDIANTES
          </button>
          <button className="button" onClick={() => getDatas('staff')}>
            STAFF
          </button>
        </div>

        <div className="Characters-container">
          {listCharacters.map((character) => (
            <Character key={character.name + character.actor} character={character} />
          ))}
        </div>

        {!!openModal && (
          <Modal>
            <CharacterForm />
          </Modal>
        )}
        {!!openDialog && <Dialog>{message}</Dialog>}
        <br></br>

        {/* <Counter></Counter> */}
      </div>
    </React.Fragment>
  );
}

export default AppUI;
