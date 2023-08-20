import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import papascerveceras from '../assets/Entradas/papascerveceras.png';
import papasyaros from '../assets/Entradas/papasyaros.png'
import bastones from '../assets/Entradas/bastones.png'
import picadagrande from '../assets/Entradas/picadagrande.png'

function CardEntradas() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={papascerveceras} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Papas Cerveceras</Card.Title>
          <Card.Text className='text-center'>
            Papas fritas cubiertas con queso cheddar, panceta y cebolla verde.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
        <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={papasyaros} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Papas y Aros de Cebolla</Card.Title>
          <Card.Text className='text-center'>
          Porcion de Papas y Aros de cebolla acompañados de una salsa.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={bastones} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Bastones de Muzzarela</Card.Title>
          <Card.Text className='text-center'>
            Bastones de Mozzarella con aderezo a eleccion (salsa golf/ mayonesa de apio/ ketchup).
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="top" src={picadagrande} alt="Papas Cerveceras"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Picada Caliente</Card.Title>
          <Card.Text className='text-center'>
            Papas fritas, aros de cebolla y bastones de mozzarella con 2 salsas a eleccion.
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

export default CardEntradas;