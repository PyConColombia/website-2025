import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={3}>
            <span className="footer-subtitle">Legales</span>
            <div className="footer-separator" />
            <ul className="footer-list">
              <li>
                <a href="" target="_blank">
                  Terms of Service
                </a>
              </li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </Col>
          <Col lg={5}>
            <span className="footer-subtitle">Otros</span>
            <div className="footer-separator" />

            <span className="footer-subtitle">Contacto</span>
            <div className="footer-separator" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
