import React from 'react'
import NavBarMenu from '../components/NavBarMenu.jsx'
import { useState } from 'react';
import { Header } from '../components/Header.jsx';
import { ProductList } from '../components/ProudctList.jsx'
import Footer from '../components/Footer.jsx';
import ButtonsMenuComidas from '../components/buttonsMenuComidas.jsx';
import './MenuComidas.css'


function MenuComidas() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
  return (
    <>
    <NavBarMenu/>
	<ButtonsMenuComidas/>
   
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
      <div className='Footer'>
      <Footer/>
      </div>
     
  
      </>
  )
}

export default MenuComidas