
import NavBarMenu from '../components/NavBarMenu.jsx'
import CarouselBanner from '../components/Carousel.jsx'


const Home = () => {
  return (
    <div>
          <NavBarMenu/>
    <div className="container">
    <CarouselBanner/>
    <div className="row">
        <div className="col">
            <h1>Home</h1>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Home