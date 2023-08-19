import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import PageNotFound from './pages/Error404';
import MenuComidas from './pages/MenuComidas';
import './App.css'
import Home from './pages/Home';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/MenuComidas' element={<MenuComidas/>}/>
    


    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App