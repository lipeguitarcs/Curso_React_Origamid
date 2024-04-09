import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import DogSvg from './DogSvg';

const App = () => {


  return (
    <div>
      <p className="fundo"></p>
      <DogSvg color="#84e" />
      <img src={foto} alt="Pôr do sol" />
    </div>
  )
}

export default App