import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import PageNotFound from './pages/Error404';
import Admin from './pages/Admin';
import './App.css'
import MenuBotones from './pages/Plantilla_cliente';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Menu' element={<MenuBotones/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App