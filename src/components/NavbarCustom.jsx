import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const NavbarCustom = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      expand="lg"
      className="bg-body-tertiary navbar-custom">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/images/logo.webp"
            alt="Logo"
            width="150px"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Keynotes</Nav.Link>
            <Nav.Link href="#">Speakers</Nav.Link>
            <Nav.Link href="#link">Schedule</Nav.Link>
            <Nav.Link href="#link">Sponsors</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className="d-flex justify-content-end mt-2 mt-lg-0">
            <Button variant="primary">Get your tickets</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
