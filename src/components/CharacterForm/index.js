import React from 'react';
import AppService from '../../services/AppService';
import './CharacterForm.scss';
import { AppContext } from '../../App/context';

function CharacterForm() {
  const { setOpenModal, setOpenDialog, setMessage } = React.useContext(AppContext);

  const generateId = () => Math.floor(Math.random() * 999999) + 1;

  const [values, setValues] = React.useState({
    id: generateId(),
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: 'Hombre',
    typeCharacter: 'Estudiante',
  });

  const addCharacter = async () => {
    setOpenModal(false);

    try {
      console.info(values);
      const response = await AppService.newCharacter(values);

      if (response.status === 201) {
        setOpenDialog(true);
        setMessage('Se creo correctamente el personaje');
      } else {
        setOpenDialog(true);
        setMessage('Hubo un inconveniente al guardar los datos ');
      }
    } catch (error) {
      setOpenDialog(true);
      setMessage('Upps, hubo un error al guardar los datos ');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCharacter();
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Agrega un personaje</h1>
        <div className="container-form">
          <div className="form-group">
            <label>NOMBRE</label>
            <input type="text" name="name" onChange={handleChange}></input>
          </div>
          <div className="form-group">
            <label>CUMPLEAÑOS</label>
            <input type="text" name="dateOfBirth" onChange={handleChange}></input>
          </div>

          <div className="form-group">
            <label>COLOR DE OJOS</label>
            <input type="text" name="eyeColour" onChange={handleChange}></input>
          </div>

          <div className="form-group">
            <label>COLOR DE PELO</label>
            <input type="text" name="hairColour" onChange={handleChange}></input>
          </div>
          <div className="form-group">
            <label>GENERO</label>
            <div>
              <input type="radio" value="Mujer" name="gender" onChange={handleChange} /> Mujer
              <input type="radio" value="Hombre" checked={true} name="gender" onChange={handleChange} /> Hombre
            </div>
          </div>
          <div className="form-group">
            <label>POSICIÓN</label>
            <div>
              <input type="radio" value="Estudiante" checked={true} name="typeCharacter" onChange={handleChange} /> Estudiante
              <input type="radio" value="Staff" name="typeCharacter" /> Staff
            </div>
          </div>
        </div>
        <div className="TodoForm-buttonContainer">
          <button type="submit">GUARDAR</button>
        </div>
      </form>
    </div>
  );
}

export default CharacterForm;
