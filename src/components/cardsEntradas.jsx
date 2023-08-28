import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import papascerveceras from '../assets/Entradas/papascerveceras.png';
import papasyaros from '../assets/Entradas/papasyaros.png'
import bastones from '../assets/Entradas/bastones.png'
import picadagrande from '../assets/Entradas/picadagrande.png'
import empanadascarne from '../assets/Entradas/empandascarne.jpg'
import sandwichmiga from '../assets/Entradas/sandwichmiga.jpg'
import picadafria from '../assets/Entradas/picadafria.jpg'
import rabas from '../assets/Entradas/rabas.jpg'

function CardEntradas() {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={papascerveceras} alt="Papas Cerveceras" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Papas Cerveceras</Card.Title>
          <Card.Text className='text-center'>
            Papas fritas cubiertas con queso cheddar, panceta y cebolla verde.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
        <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={papasyaros} alt="Papas y aros de cebolla" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Papas y Aros de Cebolla</Card.Title>
          <Card.Text className='text-center'>
          Porcion de Papas y Aros de cebolla acompañados de una salsa.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
        <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={rabas} alt="Papas y aros de cebolla" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Rabas</Card.Title>
          <Card.Text className='text-center'>
          Porcion de Rabas acompañado de una salsa y/o mayonesa a eleccion.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
    <div className='m-2'>
      <Card style={{ width: '16rem' }} className='bg-dark'>
        <Card.Img variant="" src={bastones} alt="Bastones de queso" height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Bastones de Muzzarela</Card.Title>
          <Card.Text className='text-center'>
            Bastones de Mozzarella con aderezo a eleccion (salsa golf/ mayonesa de apio/ ketchup).
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="" src={picadagrande} alt="Picada grande"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Picada Caliente</Card.Title>
          <Card.Text className='text-center'>
            Papas fritas, aros de cebolla y bastones de mozzarella con 2 salsas a eleccion.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="" src={picadafria} alt="Picada fria"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Picada para compartir</Card.Title>
          <Card.Text className='text-center'>
            Picada grande para compartir. Trae salame, queso, jamon, queso roquefort, aceitunas.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="" src={sandwichmiga} alt="sandwiches de miga"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Sandwiches de miga</Card.Title>
          <Card.Text className='text-center'>
            Tabla de sandwiches de miga para compartir. Variedad surtida de sandwiches.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
      <div className='m-2'>
      <Card style={{ width: '16rem' }}  className='bg-dark'>
        <Card.Img variant="" src={empanadascarne} alt="empandas de carne"height="180" />
        <Card.Body>
          <Card.Title className='text-center text-light'>Empanadas de Carne</Card.Title>
          <Card.Text className='text-center'>
            Empanadas de carne cortada a cuchillo con cebolla verde, huevo y aceitunas.
          </Card.Text>
          <div className='d-flex justify-content-center mt-4'>
          
          </div>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default CardEntradas;