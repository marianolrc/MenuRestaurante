import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import users from '../data/users.json'
import './Tablas.css'

const TablaUsuarios = () => {



  return (
    <div className='container-fluid '>
          <Table className='container-fluid tabla' bordered striped hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Estado</th>
          <th>Rol</th>
          <th>Borrar</th>

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

          </tr>
        );
      })}

      </tbody>
    </Table>
    </div>
  );
}

export default TablaUsuarios