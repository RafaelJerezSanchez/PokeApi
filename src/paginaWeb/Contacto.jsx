import React from 'react';
import { useParams } from 'react-router-dom';

const contactos = {
  morgado: {
    nombre: 'Morgado',
    avatar: '/Morgui.png',
  },
  antonio: {
    nombre: 'Antonio',
    avatar: '/Tonio.png',
  },
  // Podemos agregar más contactos a continuación
};

const Contacto = () => {
  const { nombre } = useParams(); 
  const contacto = contactos[nombre];

  if (!contacto) {
    return <p>Contacto no encontrado</p>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contacto</h1>
      <img
        src={contacto.avatar}
        alt={`Avatar de ${contacto.nombre}`}
        style={{ borderRadius: '50%', width: '100px', height: '100px' }}
      />
      <p>Nombre: {contacto.nombre}</p>
    </div>
  );
};

export default Contacto;
