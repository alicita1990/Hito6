import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>Los Mejores del sector</Card.Header>
      <Card.Body>
        <Card.Title>Ofertas especiales</Card.Title>
        <Button variant="dark">Hablemos!</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2024</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;