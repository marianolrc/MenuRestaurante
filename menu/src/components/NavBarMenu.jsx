import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import {NavLink , useLocation} from 'react-router-dom'
import './NavBarMenu.css'
import Button from 'react-bootstrap/Button';

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
            <Nav className="mx-auto" >
            <div className='d-flex justify-content-between'>
            <NavLink className="nav-link" to="/" style={{ ...navLinkStyle, ...(isLinkActive('/') && activeLinkStyle) }}>Home</NavLink>
            <NavLink className="nav-link" to="/menu" style={{ ...navLinkStyle, ...(isLinkActive('/menu') && activeLinkStyle) }}>Menu</NavLink>
            <NavLink className="nav-link" to="/AboutUs" style={{ ...navLinkStyle, ...(isLinkActive('/AboutUs') && activeLinkStyle) }} >About Us</NavLink>
            </div>
            <div className="d-flex justify-content-center">
            <div className='ms-5'>
            <Button variant="dark " className=''>
            <NavLink className="nav-link" to="/PageNotFound" style={{ ...navLinkStyle, ...(isLinkActive('/Error404') && activeLinkStyle) }}>Login</NavLink></Button>{' '}
            </div>
            <div className="ms-5">
            <Button variant="dark " className=''>
            <NavLink className="nav-link" to="/PageNotFound" style={{ ...navLinkStyle, ...(isLinkActive('/Error404') && activeLinkStyle) }}>Registrate</NavLink></Button>{' '}
            </div>
            </div>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default NavBarMenu