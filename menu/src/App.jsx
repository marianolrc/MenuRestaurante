import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import NavBarMenu from './components/NavBarMenu';
import PageNotFound from './pages/Error404';
import './App.css'
import MenuBotones from './pages/Plantilla_cliente';

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='*' element={<MenuBotones/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App