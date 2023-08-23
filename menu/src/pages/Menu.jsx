import React from 'react'
import NavBarMenu from '../components/NavBarMenu.jsx'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardEntradas from '../components/cardsEntradas.jsx';
import CardPlatosPrincipales from '../components/cardPlatosPrincipales.jsx';
import CardsPostres from '../components/CardsPostres.jsx';
import CardsBebidas from '../components/CardsBebidas.jsx';
import Footer from '../components/Footer.jsx';
import NavbarLog from '../components/NavbarLog.jsx';
import '../components/NavBarMenu.css'
import MenuComidas from './MenuComidas.jsx';
import '../pages/MenuComidas.css'


const Menu = () => {

    return (
        <>
        <NavbarLog/>

        <div >
    {<MenuComidas/>}

    <div className='container-fluid bg-dark mt-3'>
    <Footer/>
    </div>


        </div>
        
        </>
    )


}

export default Menu