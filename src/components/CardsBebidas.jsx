import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import coca from '../assets/Bebidas/coca.jpg'
import pepsi from '../assets/Bebidas/pepsi.jpg'
import jarrajugo from '../assets/Bebidas/jarrajugo.jpg'
import vino from '../assets/Bebidas/vino.jpg'
import cerveza2 from '../assets/Bebidas/cerveza2.jpg'
import limonada from '../assets/Bebidas/limonada.jpg'
import licuadorojo from '../assets/Bebidas/licuadorojo.jpg'
import chocolatada from '../assets/Bebidas/chocolatada.jpg'

function CardsBebidas() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={pepsi} alt="Pepsi" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Pepsi </Card.Title>
          <Card.Text className='text-center'>
            Gaseosa Pepsi en lata, botella de 330ml o de litro. 
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
        <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={coca} alt="Coca-cola" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Coca-cola</Card.Title>
          <Card.Text className='text-center'>
          Gaseosa Coca-cola en lata, botella de 330ml o de litro.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={jarrajugo} alt="Jarra de Jugo" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Jarra de Jugo de Naranja</Card.Title>
          <Card.Text className='text-center'>
            Jugo exprimido fresco. Se puede elegir el endulzante.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
        
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={limonada} alt="Jarra de Limonada" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Jarra de Limonada</Card.Title>
          <Card.Text className='text-center'>
            Limon exprimido fresco. Se puede elegir el endulzante.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
      </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={licuadorojo} alt="Licuado de Frutos Rojos" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Licuado de Frutos Rojos</Card.Title>
          <Card.Text className='text-center'>
          Licuado de Frutos Rojos.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={chocolatada} alt="Chocolatada con crema" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Chocolatada con crema</Card.Title>
          <Card.Text className='text-center'>
          Chocolatada con crema.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="" src={vino} alt="Vinos" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Vinos</Card.Title>
          <Card.Text className='text-center'>
            Vinos Malbec a eleccion.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="" src={cerveza2} alt="Cerveza Artesanal"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Cerveza Artesanal</Card.Title>
          <Card.Text className='text-center'>
            Cerveza Artesanal a eleccion.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default CardsBebidas;