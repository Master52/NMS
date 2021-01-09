// or less ideally
import { 
  Navbar,
  Nav,
} from 'react-bootstrap';

import {  Link } from 'react-router-dom';


const Header = () => {

  return (
    <header>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand style={{fontSize:32}} href="#home">N&M Solutions..</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{fontSize:20}}  id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="d-flex justify-content-center" >
          <Link to="/"> Home </Link>
        </Nav.Link>
        <Nav.Link className="d-flex justify-content-center" >
          <Link to="/services"> Services </Link>
        </Nav.Link>
        <Nav.Link className="d-flex justify-content-center" >About Us</Nav.Link>
        <Nav.Link className="d-flex justify-content-center" >Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;
