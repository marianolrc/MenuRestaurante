
import NavBarMenu from '../components/NavBarMenu.jsx'
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel.jsx'
import Cards from '../components/cards.jsx'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
          <NavBarMenu/>
          
    <div className="container">
   <div className='Carusel'>
   <Carousel/>
   </div>
   
    <div className='Cards'>
     
    <Cards/>
    
    
    </div>
  </div>
  <div className='Footer'>
  <Footer/>
  </div>
  

    </div>
  )
}

export default Home