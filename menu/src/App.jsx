import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/Home';
import PageNotFound from './pages/Error404';
import './App.css'
import Admin from './pages/Admin';
import MenuComidas from './pages/MenuComidas';

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