// App.js
import React from 'react';
import NavBar from './components/NavBar';
import Presentacion from './components/Presentacion'; 
import Plan from './components/Plan';
import './App.css';
import Inicio from './components/Inicio';
import Dis from './components/Dis';
import Control from './components/Control';
import Cierre from './components/Cierre';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentacion />
      <Inicio />
      <Plan />
      <Dis />
      <Control />
      <Cierre />
      <Footer />
    </div>
  );
}

export default App;
