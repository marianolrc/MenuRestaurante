import {Navbar, Container, Nav, Image, Button, Modal, Form} from 'react-bootstrap'
import {useState} from 'react';
import {NavLink , useLocation, useNavigate} from 'react-router-dom'
import '../css/NavBarMenu.css'
import axios from 'axios';


let isLoggedIn = false;
let loggedInUserName = '';

const NavBarMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isLinkActive = (path) => {
      // Verifica si el enlace está activo comparando la ruta actual con el enlace
      return location.pathname === path;
    };

        const navLinkStyle = {
            color: '#fff', 
        };
    
        const activeLinkStyle = {
            textDecoration: 'underline',
            fontWeight: '900', // Estilo para el link activo

        };

        const [showSignUpModal, setShowSignUpModal] = useState(false);
        const [showLoginModal, setShowLoginModal] = useState(false);
    

        const handleSignUpModalOpen = () => {
            setShowSignUpModal(true);
        };
    
        const handleLoginModalOpen = () => {
            setShowLoginModal(true);
        };
    
        const handleModalClose = () => {
            setShowSignUpModal(false);
            setShowLoginModal(false);
        };
    
        const handleLogout = () => {
            isLoggedIn = false;
            loggedInUserName = '';
            localStorage.clear();
            navigate('/');
        };

  return (
        <>
        <Navbar expand="lg" className="barranav">
        <Container>
        <Navbar.Brand href="/" className="enlaces"> <Image className='img-nav' height={60} width={60} src="https://i.imgur.com/7Q4hkT0.png"   rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" >
            <NavLink className="nav-link" to="/" style={{ ...navLinkStyle, ...(isLinkActive('/') && activeLinkStyle) }}>Home</NavLink>
            <NavLink className="nav-link" to="/menu" style={{ ...navLinkStyle, ...(isLinkActive('/menu') && activeLinkStyle) }}>Menu</NavLink>
            <NavLink className="nav-link" to="/about" style={{ ...navLinkStyle, ...(isLinkActive('/about') && activeLinkStyle) }} >About Us</NavLink>

            </Nav>
            <div className="d-flex align-items-center">
            {isLoggedIn ? (
                                    <>
                                        <div className="me-3 text-light">
                                            Bienvenido, {loggedInUserName}
                                        </div>
                                        <Button variant="dark" onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <div className='me-3'>
                                            <Button variant="dark" onClick={handleLoginModalOpen}>
                                                Iniciar Sesión
                                            </Button>{' '}
                                            <Button variant="dark" onClick={handleSignUpModalOpen}>
                                                Registrate
                                            </Button>
                                        </div>
                                    </>
                                )}
            </div>
        </Navbar.Collapse>
        </Container>

        </Navbar>
                <SignUpModal showModal={showSignUpModal} closeModal={handleModalClose} />
                <LoginModal showModal={showLoginModal} closeModal={handleModalClose}/>
        </>


  );


}

const SignUpModal = ({ showModal, closeModal }) => {


    const [nameSurname, setNameSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const state = 'active';
    const rol = 'client';

    const handleNameSurnameChange = (event) => {
        setNameSurname(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        const formData = {
            nameSurname,
            email,
            password,
            state,
            rol,
        };

        // Realiza la solicitud POST a la API
        axios.post('http://localhost:3000/api/users', formData)
        .then(response => {
        console.log('Respuesta del servidor:', response.data);
        closeModal(); // Cierra el modal después de enviar el formulario
    })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
            // Aquí puedes manejar el error, mostrar mensajes de error, etc.
    });
        closeModal(); // Cierra el modal después de enviar el formulario
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Registro de Usuarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="nameSurname">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control type="text" value={nameSurname} onChange={handleNameSurnameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleEmailChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const LoginModal = ({ showModal, closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        const formData = {
            email,
            password,
        };

        // Realiza la solicitud POST a la API de inicio de sesión
        axios.post('http://localhost:3000/api/login', formData)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
                closeModal(); // Cierra el modal después de enviar el formulario
                if(response.data.userState === 'admin' && response.data.authorization) {
                    localStorage.setItem('authorization', response.data.authorization);
                    navigate('/admin');
                    isLoggedIn = true;
                    loggedInUserName = response.data.userName;
                    console.log(loggedInUserName);

                } else {
                    navigate('/Menu');
                    isLoggedIn = true;
                    loggedInUserName = response.data.userName;
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
                // Aquí puedes manejar el error, mostrar mensajes de error, etc.
            });
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Iniciar Sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleEmailChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={password} onChange={handlePasswordChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default NavBarMenu