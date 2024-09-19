import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartContext } from './context/Cartcontext';
import React, { useContext } from 'react'; 
import Button from 'react-bootstrap/Button';
import { FaCartPlus } from "react-icons/fa"; 
const { token, logout } = useContext(UserContext);
import Userprovider from './context/Userprovider';



function MyNavbar() {
  const { getTotal } = useContext(CartContext);

  const { token, logout } = useContext(UserProvider);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Profile" className={setActiveClass}>Profile</Nav.Link>
            <Nav.Link as={Link} onClick={logout} className={setActiveClass}>Logout</Nav.Link>
            {!token && (
              <>
                <Nav.Link as={Link} to="/Login" className={setActiveClass}>Login</Nav.Link>
                <Nav.Link as={Link} to="/Register" className={setActiveClass}>Register</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/Formulario" className={setActiveClass}>Formulario</Nav.Link>
            <Nav.Link as={Link} to="/*" className={setActiveClass}>Notfound</Nav.Link>
            <Nav.Link href="#link">Total: ${getTotal()}</Nav.Link>
          </Nav>
          <Button variant="dark">
            Total: ${getTotal()} <FaCartPlus style={{ marginLeft: '5px' }} /> 
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;