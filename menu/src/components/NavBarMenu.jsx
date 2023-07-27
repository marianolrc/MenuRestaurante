import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {NavLink , useLocation} from 'react-router-dom'
import './NavBarMenu.css'

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
            color: '#16DB65', 
        };
    
        const activeLinkStyle = {
            textDecoration: 'underline',
            fontWeight: '900', // Estilo para el link activo

        };

  return (
        <Navbar expand="lg" className="barranav">
        <Container>
        <Navbar.Brand href="/" className="enlaces">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" >
            <NavLink className="nav-link" to="/" style={{ ...navLinkStyle, ...(isLinkActive('/') && activeLinkStyle) }}>Home</NavLink>
            <NavLink className="nav-link" to="/menu" style={{ ...navLinkStyle, ...(isLinkActive('/menu') && activeLinkStyle) }}>Menu</NavLink>
            <NavLink className="nav-link" to="/about" style={{ ...navLinkStyle, ...(isLinkActive('/about') && activeLinkStyle) }} >About Us</NavLink>

            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default NavBarMenu