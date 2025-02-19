import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
              <Col lg={5}>
                <div className="footer-logo">
                  <Image src="/images/logo.webp" alt="Logo" width="100%" height="auto" />
                </div>
              </Col>
              {/* <Col lg={3}>
                <span className="footer-subtitle">Legales</span>
                <div className="footer-separator" />
                <ul className="footer-list">
                  <li>
                    <a href="" target="_blank">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </Col> */}
              <Col lg={4}>
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
