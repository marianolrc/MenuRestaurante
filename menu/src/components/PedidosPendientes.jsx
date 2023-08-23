import { Button } from 'react-bootstrap';
import './Tablas.css'


const PedidosPendientes = () => {
  return (
    <div>
        <table>
            <thead>
            <tr>
            <th>Id</th>
            <th>Categoria</th>
            <th>Subcategoria</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Estado</th>

            </tr>
        </thead>
        <tbody>
        {pedidos.map(pedidos => {
            return(
            <tr key={pedidos.id}>
                <td>{pedidos.id}</td>
                <td>{pedidos.categoria_producto}</td>
                <td>{pedidos.subcategoria_producto}</td>
                <td>{pedidos.nombre_producto}</td>
                <td>{pedidos.descripcion}</td>
                <td>{pedidos.precio}</td>
                <td>Realizado o Pendiente</td>

            </tr>
            );
        })}

        </tbody>
        </table>
    </div>
  )
}

export default PedidosPendientes