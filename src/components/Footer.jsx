import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';

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

                <ul className="footer-list">
                  <li>
                    <a href="" target="_blank">
                      Code of Conduct
                    </a>
                  </li>
                  {/* <li>
                    <a href="" target="_blank">
                      Code of Conduct Enforcement
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      Procedure
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      Health & Safety Policy
                    </a>
                  </li> */}
                </ul>

                <span className="footer-subtitle">Contacto</span>
                <div className="footer-separator" />

                <ul className="footer-list">
                  <li>
                    <a href="mailto:hello@pycon.co">Hello@pycon.co</a>
                  </li>
                </ul>

                <span className="footer-subtitle">Síguenos en:</span>
                <div className="footer-separator" />
                <div className="footer-social">
                  <a
                    href="https://twitter.com/pyconcolombia"
                    target="_blank"
                    rel="noreferrer"
                    className="">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/pyconcolombia" target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faFacebookF} />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/pyconcolombia/"
                    target="_blank"
                    rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faInstagram} />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/pyconcolombia" target="_blank" rel="noreferrer">
                    <div className="social-icon">
                      <div className="fa-stack">
                        <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                        <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faYoutube} />
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/pyconcolombia" target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGithubAlt} />
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
