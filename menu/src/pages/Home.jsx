
import NavBarMenu from '../components/NavBarMenu.jsx'
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel.jsx'
import Cards from '../components/cards.jsx'
import './Home.css'
import CardEntradas from '../components/cardsEntradas.jsx'

const Home = () => {
  return (
    <div className='Home'>
          <NavBarMenu/>
          
    <div className="container">
    <Carousel/>
    <div className='Cards'>
    <Cards/>
    </div>
  </div>
  

  <div className='container-fluid bg-dark mt-3'>
  <Footer/>
  </div>
  

    </div>
  )
}

export default Home