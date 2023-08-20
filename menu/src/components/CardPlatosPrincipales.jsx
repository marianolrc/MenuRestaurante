import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Banner from '../assets/img/milanesas_pure.jpg'
import Banner2 from '../assets/img/pizza.jpg'
import sanguchevacio from '../assets/img/sanguchevacio.jpg'
import bistec from '../assets/img/bistec.jpg'

function CardPlatosPrincipales() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={bistec} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Bistec con papas</Card.Title>
          <Card.Text className='text-center'>
            Bistec premium con una porcion de papas Podes elegir dos mayonesas o aderezos.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
        <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={sanguchevacio} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Sandwich de Vacio</Card.Title>
          <Card.Text className='text-center'>
          Sandwich de Vacio con mayonesa de apio, pepinos, tomates y cebolla morada.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={Banner} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Milanesa con pure</Card.Title>
          <Card.Text className='text-center'>
            Milanesa de ternera con pure. (salsa golf/ mayonesa de apio/ ketchup).
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="top" src={Banner2} alt="Papas Cerveceras"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Pizza</Card.Title>
          <Card.Text className='text-center'>
            Pizza de muzzarella con morrones. Puede agregarle extra queso si desea.
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

export default CardPlatosPrincipales;