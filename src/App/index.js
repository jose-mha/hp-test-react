import Header from '../components/Header';
import title from '../assets/title.png';
import CharacterList from '../components/CharacterList';
import './App.scss';

function App() {
  return (
    <div className="Container">
      <Header />

      <div className="Container-title">
        <img className="Img-title" src={title} alt="title" />
      </div>
      <div className="Container-filtro">
        <h3>Selecciona tu filtro</h3>
      </div>
      <div className="Container-buttons">
        <button className="button">ESTUDIANTES</button>
        <button className="button">STAFF</button>
      </div>

      <CharacterList />
    </div>
  );
}

export default App;
