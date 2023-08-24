
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/404.css'

const PageNotFound = () => {
  
  return (
<Container className='contenedor-404'>
  <Row className="mt-5">
    <Col className="text-center">
      <h1 className="display-2">404</h1>
      <h2 className="display-4">Oops! Página no encontrada</h2>
      <p className="lead">Lo sentimos, la página que estás buscando no existe.</p>
      <Button className='boton' as={Link} to="/" variant="primary" size="lg">Ir a la página de inicio</Button>
    </Col>
  </Row>
</Container>

  );
};

export default PageNotFound;
