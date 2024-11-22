import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Generacion from './Generacion';

function Contenido() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/gen1"
            element={<Generacion inicio={1} fin={151} />}
          />
          <Route
            path="/gen2"
            element={<Generacion inicio={152} fin={251} />}
          />
          <Route
            path="/gen3"
            element={<Generacion inicio={252} fin={386} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

function Home() {
  return <h2>Bienvenido a la página principal</h2>;
}

export default Contenido;