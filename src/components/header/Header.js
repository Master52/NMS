// or less ideally
import { 
  Navbar,
  Nav,
} from 'react-bootstrap';


const Header = () => {

  return (
    <header>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand style={{fontSize:32}} href="#home">N&M Solutions..</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{fontSize:20}}  id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="d-flex justify-content-center" href="#home">Home</Nav.Link>
        <Nav.Link className="d-flex justify-content-center" href="#services">Services</Nav.Link>
        <Nav.Link className="d-flex justify-content-center" href="#services">About Us</Nav.Link>
        <Nav.Link className="d-flex justify-content-center" href="#services">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;
