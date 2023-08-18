import {Nav} from 'react-bootstrap'

const navTabsAdmin = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="#">Usuarios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Menúes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" >
          Pedidos
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default navTabsAdmin