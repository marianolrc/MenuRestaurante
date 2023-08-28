import React from 'react'
import NavBarMenu from '../components/NavBarMenu.jsx'
import Footer from '../components/Footer.jsx'
import Image from 'react-bootstrap/Image'
import restaurant2 from '../assets/AboutUs/restaurant2.png'
import employees from '../assets/AboutUs/employees.jpg'
import staff2 from '../assets/AboutUs/staff2.jpg'
import ingredientes from '../assets/AboutUs/ingredientes.jpg'
import jardin from '../assets/AboutUs/jardin.jpg'
import clientes from '../assets/AboutUs/clientes.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const AboutUs = () =>{
    return (
        <>
            <NavBarMenu></NavBarMenu>
       
       
  
        <div className=''>
            <Card className="bg-dark text-white">
        <Card.Img src={restaurant2} alt="Card image"  className='img-fluid' />
        <Card.ImgOverlay>
            <Card.Title><h1 className='text-center text-decoration-underline'> Mr.Chef</h1></Card.Title>
            <Card.Text></Card.Text>
        </Card.ImgOverlay>
        </Card>
        </div>
        <div className='bg-dark'>.</div>

        <CardGroup className='d-flex flex-wrap'>
      <Card>
        <Card.Img variant="top" src={ingredientes} height={286} />
        <Card.Body>
        <h2 className='text-center'>Ingredientes de todo el mundo</h2>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={staff2}  />
        <Card.Body>
          <h2 className='text-center'>Chefs reconocidos mundialmente</h2>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={employees} height={286}  />
        <Card.Body>
          <Card.Title></Card.Title>
          <h2 className='text-center'>El mejor servicio a tu mesa</h2>
        </Card.Body>
      </Card>
    </CardGroup>
        <div className='bg-dark'>.</div>

        <div className='d-flex flex-row flex-wrap bg-dark'>
        <Card className="bg-dark text-white m-2">
        <Card.Img src={jardin} alt="Card image"  height={420}/>
        </Card>
        <div className='bg-dark text-light m-2'>
        <Card.Img src={clientes} alt="Card image"  height={350}/>
        <h4>Contamos con un patio al aire libre para cualquier tipo de evento. </h4>
        </div>
        </div>

       

        
   {/*  <Card style={{ width: '18rem' }}> */}
        {/* <Card.Img variant="top" src={} height={100} /> */}
       
           
        

     
    <div className='bg-dark container-fluid'>
        <Footer></Footer>
    </div>

    </>
    )
}    

export default AboutUs