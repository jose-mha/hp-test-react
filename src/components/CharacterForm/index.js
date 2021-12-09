import React from 'react';
import './CharacterForm.scss';

function CharacterForm() {
  return (
    <form>
      <h1>Agrega un personaje</h1>
      <div className="container-form">
        <div className="form-group">
          <label>NOMBRE</label>
          <input type="text"></input>
        </div>
        <div className="form-group">
          <label>CUMPLEAÑOS</label>
          <input type="text"></input>
        </div>

        <div className="form-group">
          <label>COLOR DE OJOS</label>
          <input type="text"></input>
        </div>

        <div className="form-group">
          <label>COLOR DE PELO</label>
          <input type="text"></input>
        </div>
        <div className="form-group">
          <label>GENERO</label>
          <div>
            <input type="radio" value="Mujer" name="gender" /> Mujer
            <input type="radio" value="Hombre" name="gender" /> Hombre
          </div>
        </div>
        <div className="form-group">
          <label>POSICIÓN</label>
          <div>
            <input type="radio" value="Estudiante" name="gender" /> Estudiante
            <input type="radio" value="Staff" name="gender" /> Staff
          </div>
        </div>
      </div>
      <div className="TodoForm-buttonContainer">
        <button type="submit">GUARDAR</button>
      </div>
    </form>
  );
}

export default CharacterForm;
