import './Tablas.css'
import { useState } from 'react';

const PedidosPendientes = () => {

  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      products: [
        {
          productName: 'Producto 1',
          description: 'Descripción del Producto 1',
          price: 10,
          quantity: 2,
        },
        {
          productName: 'Producto 2',
          description: 'Descripción del Producto 2',
          price: 20,
          quantity: 1,
        },
      ],
      status: 'pendiente',
    },
    // Agrega más objetos de pedido según sea necesario
  ]);

  const handleStatusChange = (pedidoId) => {
    const actualizarPedidos = pedidos.map(pedido => {
      if (pedido.id === pedidoId) {
        return { ...pedido, status: 'realizado' };
      }
      return pedido;
    });
    setPedidos(actualizarPedidos);
  };
  return (
    <div className="table-container">
      <h2>Pedidos Pendientes de Entrega</h2>
      <table className="responsive-table">
        <thead>
          <tr>
            <th>ID Pedido</th>
            <th>Productos</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(pedido => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>
                <ul>
                  {pedido.products.map((product, index) => (
                    <li key={index}>
                      {product.productName} - Cantidad: {product.quantity}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                ${pedido.products.reduce((total, product) => total + product.price * product.quantity, 0)}
              </td>
              <td>{pedido.status}</td>
              <td>
                {pedido.status === 'pendiente' && (
                  <button onClick={() => handleStatusChange(pedido.id)}>
                    Marcar como Realizado
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PedidosPendientes