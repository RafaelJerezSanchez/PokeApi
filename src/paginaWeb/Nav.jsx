import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Inicio</Link> - 
      <Link to="/gen1">Gen1</Link> - 
      <Link to="/gen2">Gen2</Link> - 
      <Link to="/gen3">Gen3</Link> - 
      <Link to="/contactos">Contactos</Link>
    </nav>
  );
}

export default Nav;
