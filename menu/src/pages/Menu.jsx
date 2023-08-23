import React from 'react'
import NavBarMenu from '../components/NavBarMenu.jsx'

import Footer from '../components/Footer.jsx';
import NavbarLog from '../components/NavbarLog.jsx';
import '../components/NavBarMenu.css'
import Pagos from './Pagos.jsx';
import PagoEfectivo from '../components/modalPagosEfectivo.jsx';


const Menu = () => {

    return (
        <>
        <NavbarLog/>

        <div >
         {<Pagos /> }
         
         
        <div>

        </div>
      
 

    <div className='container-fluid bg-dark mt-3'>
    <Footer/>
    </div>


        </div>
        
        </>
    )


}

export default Menu