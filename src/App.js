import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import cartel from './imagenes/mlPNG.png';
import Rutas from './componentes/Rutas';
import Home from './paginas/Home';
import Registro from './paginas/Registro';
import Loguearse from './paginas/Loguearse';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='App'>
      <h1>Mercadito libre</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="list" element={<Home/>}>Home</Link>
          </li>
          <li>
            <Link to="/registro" className="list" element={<Registro/>}>Registro</Link>
          </li>
          <li>
            <Link to="/Loguearse" className="list" element={<Loguearse/>}>Loguearse</Link>
          </li>
        </ul>
      </nav>
      <img src={cartel} className='AppLogo' alt='Cartel mercado libre'/>
      <Rutas />
      <Footer/>
    </div>

  );
}

export default App;
