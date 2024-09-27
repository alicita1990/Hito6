import React, { useContext } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cartcontext';
import { UserContext } from '../context/Usercontext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function MyNavbar() {
  const { getTotal } = useContext(CartContext);
  const { user, login, logout } = useContext(UserContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            {/* <Nav.Link className={setActiveClass} as={Link} to="/Register">Register</Nav.Link> */}
          
          </Nav>
          {user ? (
            <>
            <Link to ="/Formulario">
              <Button variant="danger" onClick={logout}>Logout</Button>
            </Link>

              <Link to="/Profile">
                <Button variant="outline-primary" >
                  Profile
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login">
                <Button variant="primary">Login</Button>
              </Link>
              <Link to="/Formulario">
                <Button variant="success">Register</Button>
              </Link>
            </>
          )}
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