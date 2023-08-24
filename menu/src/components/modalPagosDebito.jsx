import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import efectivo from '../assets/img/efectivo.png'
import credit from '../assets/img/credit.png'
import debit from '../assets/img/debit2.png'
import {Navbar, Image} from 'react-bootstrap'
import '../css/NavBarMenu.css'

import React from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

const PagoDebito = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex'>
      <div>
      <div className='d-flex flex-column btn btn-dark  botonpagos enlaces mt-2' >
            <Navbar.Brand href="/" className=""> <Image className='img-nav mt-3' height={140} width={140} src={debit}   rounded />
        </Navbar.Brand>
       
        <h2 className='mt-3'>Debito</h2>
        <Button variant="success" onClick={handleShow} >
        <h4>Pagar</h4> 
      </Button>
      
</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos de tarjeta</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column align-items-center'>
            <Image className='img-nav mt-2 mb-3' height={140} width={140} src={debit}   rounded />
      
             <form action="" className='d-flex flex-column'>
            <FormLabel>Nombre completo que figura en tarjeta:  </FormLabel>
            <input type="texto" maxLength={10}/>
            <FormLabel>Numero de tarjeta  </FormLabel>
            <input type="number" maxLength={100}/>
            <FormLabel>Codigo en dorsal de tarjeta  </FormLabel>
            <input type="number" maxLength={100}/>
            </form> 
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

export default PagoDebito;