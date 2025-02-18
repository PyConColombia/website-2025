import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
              <Col lg={3}>
                <Image src="/images/logo.webp" alt="Logo" width="100%" height="auto" />
              </Col>
              <Col lg={4}>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
