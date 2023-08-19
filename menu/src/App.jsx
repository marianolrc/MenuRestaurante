import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import NavBarMenu from './components/NavBarMenu';
import PageNotFound from './pages/Error404';
import MenuComidas from './pages/MenuComidas';
import './App.css'
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/MenuComidas' element={<MenuComidas/>}/>
    


    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App