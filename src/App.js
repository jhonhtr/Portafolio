import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobremi from './Sobre_mi/Sobremi';
import Educacion from './Edu/Educacion';
import Portafolio from './Porta/Portafolio';
import Skills from './Habilidades/Skills';

function App () {
  return (
    <Router>
      <Routes>      
        {/* Cambiamos la ruta a "/inicio" y corregimos el uso del componente Inicio */}
        < Route path="/" element={<Sobremi />} />
        <Route path="/Educacion" element={<Educacion />} />
        <Route path="/Portafolio" element={<Portafolio />} />
        <Route path="/Skills" element={<Skills/>} />        
      </Routes>
    </Router> 
  );
} 

export default App; 
