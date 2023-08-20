import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import flan from '../assets/Postres/flan.jpg'
import chocotorta from '../assets/Postres/chocotorta.jpg'
import helado from '../assets/Postres/helado.png'
import torta from '../assets/Postres/torta.jpg'

function CardsPostres() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={flan} alt="Budin de pan" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Porcion de Flan </Card.Title>
          <Card.Text className='text-center'>
            Porcion de Flan con dulce de leche. 
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
        <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={torta} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Torta de Chocolate con cerezas</Card.Title>
          <Card.Text className='text-center'>
          Torta de chocolate y cerezas. 
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="top" src={helado} alt="Copa de Helado de Frutilla" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Copa de Helado de Frutilla</Card.Title>
          <Card.Text className='text-center'>
            Copa de Helado de Frutilla y cereza.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="top" src={chocotorta} alt="Chocotorta"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Chocotorta</Card.Title>
          <Card.Text className='text-center'>
            Porcion de chocotorta para compartir.
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

export default CardsPostres;