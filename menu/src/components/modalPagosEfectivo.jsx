import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import efectivo from '../assets/img/efectivo.png'
import credit from '../assets/img/credit.png'
import debit from '../assets/img/debit2.png'
import {Navbar, Image} from 'react-bootstrap'
import '../css/NavBarMenu.css'
import PagoDebito from '../components/modalPagosDebito'


import React from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import PagoCredito from './modalPagosCredito';
import PagoTransferencia from './modalPagosTransferencia';

const PagoEfectivo = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex'>
      <div>
      <div className='d-flex flex-column btn btn-dark  botonpagos enlaces mt-2' >
            <Navbar.Brand href="/" className=""> <Image className='img-nav mt-3' height={140} width={140} src={efectivo}   rounded />
        </Navbar.Brand>
       
        <h2 className='mt-3'>Efectivo</h2>
        <Button variant="success" onClick={handleShow} >
        <h4>Pagar</h4> 
      </Button>
      
</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Con cuantó Abona?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
             <form action="">
            <FormLabel>Monto exacto:  </FormLabel>
            <input type="number" maxLength={10}/>
            <FormLabel>¿Queres dejar un comentario?  </FormLabel>
            <input type="texto" maxLength={100}/>
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
      <PagoDebito></PagoDebito>

      </div>

      <div>
      
    <PagoCredito></PagoCredito>

      </div>

      <div>

        <PagoTransferencia></PagoTransferencia>
      </div>




      

      </div>
    </>
  );
}

export default PagoEfectivo;