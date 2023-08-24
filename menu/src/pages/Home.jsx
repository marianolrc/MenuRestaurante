
import NavBarMenu from '../components/NavBarMenu.jsx'
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel.jsx'
import './Home.css'
import CardEntradas from '../components/cardsEntradas.jsx'
import terraza from '../assets/img/terraza.jpg'
import Image from 'react-bootstrap/Image';
import ComidaHome from '../components/ComidaHome.jsx'

const Home = () => {
  return (
    <div className='Home'>
          <NavBarMenu/>
          
    <div className="container">
   <div className='Carusel'>
   <Carousel/>
   </div>
   
  
  </div>
{/*   <div className='mt-3 mb-5'>
    <Cards/>
  </div> */}

  <div className='bg- mb-3'>
    <ComidaHome />
  </div>

  <div className='d-none d-sm-block '>
  <h1 className='bg-dark text-light text-center mb-3'>Disfruta de una hermosa vista de la ciudad.</h1>
  <Image src={terraza} fluid />;
  </div>
  

  <div className='container-fluid bg-dark mt-3'>
  <Footer/>
  </div>
  

    </div>
  )
}

export default Home