import React from 'react'
import NavBarMenu from '../components/NavBarMenu.jsx'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardEntradas from '../components/cardsEntradas.jsx';
import CardPlatosPrincipales from '../components/cardPlatosPrincipales.jsx';
import CardsPostres from '../components/CardsPostres.jsx';
import CardsBebidas from '../components/CardsBebidas.jsx';


const Menu = () => {

    return (
        <>
        <NavBarMenu/>

        <div >
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 d-flex justify-content-center"
    >
      <Tab eventKey="Entradas" title="Entradas" >
        <CardEntradas></CardEntradas>
      </Tab>
      <Tab eventKey="Platos Principales" title="Platos Principales">
       <CardPlatosPrincipales></CardPlatosPrincipales>
      </Tab>
      <Tab eventKey="Postres" title="Postres" >
        <CardsPostres></CardsPostres>
      </Tab>
      <Tab eventKey="Bebidas" title="Bebidas" >
        <CardsBebidas></CardsBebidas>
      </Tab>
    </Tabs>


        </div>
        
        </>
    )


}

export default Menu