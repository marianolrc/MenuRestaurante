import React, { useEffect, useState } from 'react'
//import NavBarMenu from '../components/NavBarMenu.jsx'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardEntradas from '../components/cardsEntradas.jsx';
import CardPlatosPrincipales from '../components/cardPlatosPrincipales.jsx';
import CardsPostres from '../components/CardsPostres.jsx';
import CardsBebidas from '../components/CardsBebidas.jsx';
import Axios from 'axios';
//import Footer from '../components/Footer.jsx';


function ComidaHome() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            Axios.get('http://localhost:3000/api/products')
        .then((response) => {
            setProducts(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
        } catch(error) {
            console.error(error);
        }
    })

    return (
        <>

            <div>
                <Tabs
                    defaultActive="profile"
                    id="uncontrolled-tab-example"
                    className="mt-3 mb-3 d-flex justify-content-center bg-dark pt-3 mt-3"
                >
                    <Tab eventKey="Entradas" title="Entradas">
                        {/* <CardEntradas></CardEntradas> */}
                    </Tab>
                    <Tab eventKey="Platos Principales" title="Platos Principales">
                        <CardPlatosPrincipales></CardPlatosPrincipales>
                    </Tab>
                    <Tab eventKey="Postres" title="Postres">
                        <CardsPostres></CardsPostres>
                    </Tab>
                    <Tab eventKey="Bebidas" title="Bebidas">
                        <CardsBebidas></CardsBebidas>
                    </Tab>
                </Tabs>

            </div>

        </>
    );


}

export default ComidaHome