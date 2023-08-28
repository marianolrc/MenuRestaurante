import React from 'react'
import {Navbar, Image} from 'react-bootstrap'
import NavbarLog from '../components/NavbarLog.jsx';
import Footer from '../components/Footer.jsx';
import '../css/NavBarMenu.css'
import credit from '../assets/img/credit.png'
import efectivo from '../assets/img/efectivo.png'
import debit from '../assets/img/debit2.png'
import transferencia from '../assets/img/transferencia.png'
import PagoEfectivo from '../components/modalPagosEfectivo.jsx';


const Pagos = () => {

    return (
        <>
            <NavbarLog/>
            <h1 className='text-center text-light bg-dark'>Formas de Pago</h1>
            <div className="d-flex flex-wrap ">
        

        <div>
            <PagoEfectivo></PagoEfectivo>
        </div>
      
         {/*    </div>
            <div className='d-flex flex-column btn btn-dark  botonpagos enlaces' >
            <Navbar.Brand href="/" className=""> <Image className='img-nav mt-3' height={140} width={140} src={debit}   rounded />
        </Navbar.Brand>
        
        <h2 className='mt-3'>Tarjeta de Debito</h2>
        
            </div>
            <div className='d-flex flex-column btn btn-dark  botonpagos enlaces' >
            <Navbar.Brand href="/" className=""> <Image className='img-nav mt-3' height={140} width={140} src={credit}   rounded />
        </Navbar.Brand>
       
        <h2 className='mt-3'>Tarjeta de Credito</h2>
   
            </div> */}
          {/*   <div className='d-flex flex-column btn btn-dark  botonpagos enlaces' >
            <Navbar.Brand href="/" className=""> <Image className='img-nav mt-3' height={140} width={140} src={transferencia}   rounded />
        </Navbar.Brand>
        
        <h2 className='mt-3'>Transferencia</h2>

            </div> */}
            </div>

     <div className='container-fluid bg-dark mt-3'>
    <Footer/>
    </div> 


        
        </>
    )


}

export default Pagos