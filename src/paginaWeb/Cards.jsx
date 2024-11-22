import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta({ titulo, texto, imagen, botonTexto }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
        <Button variant="primary">{botonTexto}</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
