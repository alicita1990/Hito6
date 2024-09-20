import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartContext } from './context/Cartcontext';
import React, { useContext } from 'react'; 
import Button from 'react-bootstrap/Button';
import { FaCartPlus } from "react-icons/fa"; 



  function MyNavbar() {
    const { getTotal } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="nav">
      <Container>
     
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Formulario">Formulario</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/*"></Nav.Link>
      
    
          </Nav>
          <Link to="/Cart">
            <Button variant="dark">
              Total: ${getTotal()} <FaCartPlus style={{ marginLeft: '5px' }} />
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
