
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <h1 className="display-4">404</h1>
          <h2>Oops! Página no encontrada</h2>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Button as={Link} to="/" variant="primary">Ir a la página de inicio</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
