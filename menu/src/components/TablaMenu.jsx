import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import productos from '../data/productos.json'
import './Tablas.css'
const TablaMenu = () => {
  return (
    <div className='container-fluid'>
    <Table className='tabla container-fluid' striped bordered hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Categoria</th>
          <th>Subcategoria</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
      {productos.map(productos => {
        return(
          <tr key={productos.id}>
            <td>{productos.id}</td>
            <td>{productos.categoria_producto}</td>
            <td>{productos.subcategoria_producto}</td>
            <td>{productos.nombre_producto}</td>
            <td>{productos.descripcion}</td>
            <td>{productos.precio}</td>
            <td><Button className='bg-danger'>Modificar</Button></td>
            <td><Button className='bg-black'>Borrar</Button></td>
          </tr>
        );
      })}

      </tbody>
    </Table>
    </div>
  )
}

export default TablaMenu