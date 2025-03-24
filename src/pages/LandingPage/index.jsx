import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Intro from '../CallForProposals/components/Intro';
import { Button } from 'react-bootstrap';

const LandingPage = ({ dataTranslate }) => {
  return (
    <>
      <div className="content-wrapper top-section">
        <div className="description">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <Row>
                      <div className="logo-wrapper">
                        <Image
                          src="/images/logo.webp"
                          alt="Logo"
                          width="100%"
                          height="auto"
                          className="img-fluid"
                        />
                      </div>
                    </Row>
                    <Row>
                      <Col sm={6} lg={6}>
                        <span className="subtitle">Medellín, Colombia</span>
                        <span className="subtitle date-text">{dataTranslate?.landing?.date}</span>
                      </Col>
                      <Col sm={5} lg={5}>
                        <div className="wrapper-date">
                          <span className="date">2025</span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg={5}>
                    <div className="question-ticket">
                      <h2>
                        Ready to dive into the <span className="bold-text">world of Python</span>?
                      </h2>
                      <p className="question-description">
                        Come explore, learn, and connect with others just as passionate as you are.
                      </p>
                      <p className="question-description">Stand by for more information!</p>

                      <Button
                        className="btn btn-primary button-ticket"
                        as="a"
                        href="https://www.eventbrite.co/e/pycon-colombia-2025-tickets-1271703351959"
                        target="_blank">
                        Get your tickets
                      </Button>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <Image
                      src="/images/content/description.webp"
                      alt="Hero"
                      width="100%"
                      height="auto"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="content-topics">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="topics-container">
                <div className="topics-scroll">
                  <div className="topic">Mobile</div>
                  <div className="topic">Software Development</div>
                  <div className="topic">Testing</div>
                  <div className="topic">Blockchain</div>
                  <div className="topic">Artificial Intelligence</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Intro
        subtitle={'Become a Speaker'}
        buttonLink={'/call-for-proposals'}
        buttonName={'Apply to Speak'}
      />
    </>
  );
};

LandingPage.propTypes = {
  dataTranslate: PropTypes.object.isRequired
};

export default LandingPage;
