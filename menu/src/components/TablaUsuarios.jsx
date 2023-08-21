import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import users from '../data/users.json'
const TablaUsuarios = () => {



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Estado</th>
          <th>Rol</th>
          <th>Borrar</th>
          <th>Modificar</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => {
        return(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nombre_apellido}</td>
            <td>{user.email}</td>
            <td>{user.state}</td>
            <td>{user.rol}</td>
            <td><Button>Borrar</Button></td>
            <td><Button>Modificar</Button></td>
          </tr>
        );
      })}

      </tbody>
    </Table>
  );
}

export default TablaUsuarios