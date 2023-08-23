import  { useState } from 'react';
import { Button } from 'react-bootstrap';
import users from '../data/users.json'
import './Tablas.css'

const TablaUsuarios = () => {
  
  const [userList, setUserList] = useState(users); // Estado para almacenar la lista de usuarios

  const handleDelete = (userId) => {
    // Filtrar la lista de usuarios para eliminar el usuario con el ID dado
    const updatedUserList = userList.filter(user => user.id !== userId);
    setUserList(updatedUserList); // Actualizar el estado con la nueva lista de usuarios
  };


  return (
    <div className="table-container">
          <table className='responsive-table' >
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
            <td>
                <Button onClick={() => handleDelete(user.id)}>Borrar</Button>
              </td>

          </tr>
        );
      })}

      </tbody>
    </table>
    </div>
  );
}

export default TablaUsuarios