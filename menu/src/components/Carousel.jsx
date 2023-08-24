
import { Image, Container, Carousel } from 'react-bootstrap';
import Banner from '../assets/img/milanesas_pure.jpg'
import Banner2 from '../assets/img/pizza.jpg'
import sanguchevacio from '../assets/img/sanguchevacio.jpg'
import bistec from '../assets/img/bistec.jpg'
import '../components/Carousel.css'

const CarouselBanner = () => {

  return (

    <Container fluid className='p-0 my-1' >
      <Carousel fade>
      <Carousel.Item>
        <Image src={Banner} alt='Milanesas con Pure'  className=' w-100 img-car' height={500} rounded />
        <Carousel.Caption className='contenedor' >
          <h3 className='titulo'>Milanesas Con Pure</h3>
          <p className='descripcion'>Milanesas de carne vacuna fritas, con pure y especias.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Banner2} alt='Pizza'  className=' w-100 img-car' height={500} rounded />
        <Carousel.Caption className='contenedor' >
          <h3 className='titulo'>Pizza</h3>
          <p className='descripcion'>Pizza Muzzarella con Morrones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={sanguchevacio} alt='Pizza'  className=' w-100 img-car' height={500} rounded />
        <Carousel.Caption className='contenedor' >
          <h3 className='titulo'>Sandwich de Vacio</h3>
          <p className='descripcion'>Sandwich de vacio con tomate, pepino, cebolla morada y mayonesa de apio.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={bistec} alt='Pizza'  className=' w-100 img-car' height={500} rounded />
        <Carousel.Caption className='contenedor' >
          <h3 className='titulo'>Bistec con papas</h3>
          <p className='descripcion'>Bistec premium con una porcion abundante de papas.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </Container>

  );
}

export default CarouselBanner;