import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import PageNotFound from './pages/Error404';
<<<<<<< HEAD
import Admin from './pages/Admin';
=======
import MenuComidas from './pages/MenuComidas';
>>>>>>> 7dd55420622615fc2a3c5ed71936294c9c55c19b
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