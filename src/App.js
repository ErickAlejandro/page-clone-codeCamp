import './App.css';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
    <h1>Estos son los comentarios de algunos trabajadores</h1>
    <Testimonio 
      name='Erick Ayala'
      country='Ecuador'
      cargo='Programador'
      enterprise='ISHIDA'
      description='Estoy arto por favor ayudenme'
      image='cj'
    />
    <Testimonio 
      name='Alguien Random'
      country='Iran'
      cargo='Rehen'
      enterprise='ISHIDA'
      description='Nose como llegue aqui pero Messirve ... ay porque llora el de arriba ?'
      image='tortuga'
    />
    <Testimonio 
      name='Juan'
      country='Juan'
      cargo='Product Manager'
      enterprise='ISHIDA'
      description='Vine por el puesto de limpiador y me acendieron a Product Manager.'
      image='random'
    />
    </div>
    </div>
  );
}

export default App;
