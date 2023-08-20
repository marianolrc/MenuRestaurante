import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coca from '../assets/Bebidas/coca.jpg'
import pepsi from '../assets/Bebidas/pepsi.jpg'
import jarrajugo from '../assets/Bebidas/jarrajugo.jpg'
import vino from '../assets/Bebidas/vino.jpg'
import cerveza2 from '../assets/Bebidas/cerveza2.jpg'

function CardsBebidas() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={pepsi} alt="Budin de pan" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Pepsi </Card.Title>
          <Card.Text className='text-center'>
            Gaseosa Pepsi en lata, botella de 330ml o de litro. 
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
        <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={coca} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Coca-cola</Card.Title>
          <Card.Text className='text-center'>
          Gaseosa Coca-cola en lata, botella de 330ml o de litro.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={jarrajugo} alt="Copa de Helado de Frutilla" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Jarra de Jugo de Naranja</Card.Title>
          <Card.Text className='text-center'>
            Jugo exprimido fresco. Se puede elegir el endulzante.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="top" src={vino} alt="Chocotorta"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Vinos</Card.Title>
          <Card.Text className='text-center'>
            Vinos Malbec a eleccion (Tintos, blancos y rosados).
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="top" src={cerveza2} alt="Chocotorta"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Cerveza Artesanal</Card.Title>
          <Card.Text className='text-center'>
            Cerveza Artesanal a eleccion.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default CardsBebidas;