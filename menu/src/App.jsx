import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import PageNotFound from './pages/Error404';

import './App.css'
import Admin from './pages/Admin';
import MenuComidas from './pages/MenuComidas';
import Pagos from './pages/Pagos';
import AboutUs from './pages/AboutUs';



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
      <Route path='/acercade' element={<AboutUs/>}/>

    


    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App