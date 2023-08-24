import React from 'react'
import NavBarMenu from '../components/NavBarMenu.jsx'
import { useState } from 'react';
import { Header } from '../components/Header.jsx';
import { ProductList } from '../components/ProudctList.jsx'
import Footer from '../components/Footer.jsx';
import './MenuComidas.css'
import MenuOptions from '../components/Menu-options.jsx';


function MenuComidas() {
 
  return (
    <>
    <NavBarMenu/>
	<MenuOptions/>
	
   

      <div className='Footer'>
      <Footer/>
      </div>
     
  
      </>
  )
}

export default MenuComidas