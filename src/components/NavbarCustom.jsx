import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LanguageContext from '@/LanguageContext';
// import Button from 'react-bootstrap/Button';

const NavbarCustom = ({ dataTranslate, locales }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      expand="lg"
      className="bg-body-tertiary navbar-custom"
    >
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
            <Nav.Link as={Link} to="/call-for-proposals">
              {dataTranslate?.navbar?.callForProposals}
            </Nav.Link>
            {/* <NavDropdown title="Schedule" id="schedule-nav-dropdown">
              <NavDropdown.Item as={NavLink} key={'sponsors'} to={'/sponsors'}>
                sponsors
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/sponsors">{dataTranslate?.navbar?.sponsors}</Nav.Link>
            {/*
            <Nav.Link href="#">Speakers</Nav.Link>
            <Nav.Link href="#link">Schedule</Nav.Link>
            <Nav.Link href="#link">Sponsors</Nav.Link> */}
          </Nav>
          {/* <div className="d-flex justify-content-end mt-2 mt-lg-0">
            <Button variant="primary">Get your tickets</Button>
          </div> */}
          <Nav>
            <NavDropdown title="2025" id="year-nav-dropdown">
              {[...years]
                .sort((a, b) => b - a)
                .map((year) => (
                  <NavDropdown.Item key={year} href={`https://${year}.pycon.co`}>
                    {year}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <NavDropdown
              title={language}
              id="lang-nav-dropdown"
              onSelect={(eventKey) => setLanguage(eventKey)}
            >
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
