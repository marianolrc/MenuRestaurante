import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import debit from '../assets/img/debit2.png'
import transferencia from '../assets/img/transferencia.png'
import {Navbar, Image} from 'react-bootstrap'
import '../css/NavBarMenu.css'

import React from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const PagoTransferencia = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex'>
      <div>
      <div className='d-flex flex-column btn btn-dark  botonpagos enlaces mt-2' >
            <Navbar.Brand href="/" className=""> <Image className='img-nav mt-3' height={140} width={140} src={transferencia}   rounded />
        </Navbar.Brand>
       
        <h2 className='mt-3'>Transferencia</h2>
        <Button variant="success" onClick={handleShow} >
        <h4>Pagar</h4> 
      </Button>
      
</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Puedes enviar tu pago</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column align-items-center'>
            <Image className='img-nav mt-2 mb-3' height={140} width={140} src={transferencia}   rounded />
            
            <h5 className='mb-3'>Alias: Mr.Chef.ok</h5>
            <h5 className='mb-3'>CBU: 000012545465000</h5>
            <h5 className='mb-3'>Una vez que recibamos el pago se confirmara tu compra. Muchas gracias</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

      <div>


      </div>

      <div>

        
      </div>




      

      </div>
    </>
  );
}

export default PagoTransferencia;