import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import PageNotFound from './pages/Error404';
import Admin from './pages/Admin';
import './App.css'
import Home from './pages/Home';
import MenuComidas from './pages/MenuComidas';
import Pagos from './pages/Pagos';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/menu' element={<MenuComidas/>}/>
      <Route path='/pagos' element={<Pagos/>}/>
    


    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App