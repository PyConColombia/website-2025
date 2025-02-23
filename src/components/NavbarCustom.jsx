import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';

const NavbarCustom = ({
  // dataTranslate,
  lang,
  setLang,
  locales
}) => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      expand="lg"
      className="bg-body-tertiary navbar-custom">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src="/images/logo.webp"
              alt="Logo"
              width="150px"
              height="auto"
              className="d-inline-block align-top"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link href="#">Keynotes</Nav.Link>
            <Nav.Link href="#">Speakers</Nav.Link>
            <Nav.Link href="#link">Schedule</Nav.Link>
            <Nav.Link href="#link">Sponsors</Nav.Link> */}
          </Nav>
          {/* <div className="d-flex justify-content-end mt-2 mt-lg-0">
            <Button variant="primary">Get your tickets</Button>
          </div> */}
          <Nav>
            <NavDropdown
              title={lang}
              id="lang-nav-dropdown"
              onSelect={(eventKey) => setLang(eventKey)}>
              {locales.map((locale) => (
                <NavDropdown.Item key={locale} eventKey={locale}>
                  {locale}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarCustom.propTypes = {
  dataTranslate: PropTypes.object,
  lang: PropTypes.string,
  setLang: PropTypes.func,
  locales: PropTypes.array
};

export default NavbarCustom;
