import React from 'react'
import NavBarMenu from './NavBarMenu.jsx'
import { Header } from '../components/Header.jsx';
import { ProductList } from './ProudctList.jsx';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CardsPostres from './CardsPostres.jsx';
import CardsBebidas from './CardsBebidas.jsx';
import Footer from './Footer.jsx';



function MenuOptions() {
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
    return (
        <>
  
            <div>
                <Tabs
                    defaultActive="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 d-flex justify-content-center bg-dark"
                >
                    <Tab eventKey="Platos Principales" title="Platos Principales">
                    <Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
                      <ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
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

export default MenuOptions