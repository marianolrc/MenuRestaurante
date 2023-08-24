import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import {NavLink , useLocation} from 'react-router-dom'
import '../css/NavBarMenu.css'
import Button from 'react-bootstrap/Button';
import loggedin from '../assets/img/loggedin.png'

const NavBarMenu = () => {
    const location = useLocation();

    const isLinkActive = (path) => {
      // Verifica si el enlace está activo comparando la ruta actual con el enlace
      return location.pathname === path;
    };
    // let activeStyle ={
    //     textDecoration: isLinkActive ? 'underline' : 'none',
    //     color: '#16DB65',
    // };
        const navLinkStyle = {
            color: '#fff', 
        };
    
        const activeLinkStyle = {
            textDecoration: 'underline',
            fontWeight: '900', // Estilo para el link activo

        };

  return (
        <Navbar expand="lg" className="barranav">
        <Container>
        <Navbar.Brand href="/" className="enlaces"> <Image className='img-nav' height={100} width={100} src="https://i.imgur.com/7Q4hkT0.png"   rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="/* mx-auto */" >
            <div className='d-flex justify-content-between NavbarLoginButtons'>
            <NavLink className="nav-link" to="/" style={{ ...navLinkStyle, ...(isLinkActive('/') && activeLinkStyle) }}>Home</NavLink>
            <NavLink className="nav-link" to="/menu" style={{ ...navLinkStyle, ...(isLinkActive('/menu') && activeLinkStyle) }}>Menu</NavLink>
            <NavLink className="nav-link d-flex" to="/AboutUs" style={{ ...navLinkStyle, ...(isLinkActive('/AboutUs') && activeLinkStyle) }} >About Us</NavLink>
            </div>
            <div className='d-flex flex-column align-items-center  NavbarLoggedin'>
            <div>
            <Navbar.Brand href="/" className="enlaces"> <Image className='img-nav' height={70} width={70} src={loggedin}   rounded />
        </Navbar.Brand>
            </div>
            <Button variant="dark mt-2" className=''>
            <NavLink className=" btn-dark d-flex align-content-center text-decoration-none" to="/PageNotFound" style={{ ...navLinkStyle, ...(isLinkActive('/Error404') && activeLinkStyle) }}>Cerrar Session</NavLink></Button>{' '}
            </div>
         {/*    <div className="ms-5">
            <Button variant="dark " className=''>
            <NavLink className="nav-link" to="/PageNotFound" style={{ ...navLinkStyle, ...(isLinkActive('/Error404') && activeLinkStyle) }}>Registrate</NavLink></Button>{' '}
            </div> */}
    
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default NavBarMenu 
