import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Intro from '../CallForProposals/components/Intro';

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
                        {dataTranslate?.landing?.introduction?.header}<span className="bold-text">{dataTranslate?.landing?.introduction?.boldHeader}</span>?
                      </h2>
                      <p className="question-description">
                        {dataTranslate?.landing?.introduction?.text}
                      </p>
                      <p className="question-description">{dataTranslate?.landing?.introduction?.finalText}</p>

                      {/* <button className="btn btn-primary button-ticket">Get your tickets</button> */}
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
                  <div className="topic">{dataTranslate?.landing?.topics?.mobile}</div>
                  <div className="topic">{dataTranslate?.landing?.topics?.softwareDevelopment}</div>
                  <div className="topic">{dataTranslate?.landing?.topics?.testing}</div>
                  <div className="topic">Blockchain</div>
                  <div className="topic">{dataTranslate?.landing?.topics?.AI}</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Intro
        subtitle={dataTranslate?.landing?.bodyMessage?.header}
        buttonLink={'/call-for-proposals'}
        buttonName={dataTranslate?.landing?.applyToSpeakButton}
        descriptionText={dataTranslate?.landing?.bodyMessage?.text}
        subDescriptionText={dataTranslate?.landing?.bodyMessage?.finalText}
        speakerDeadline={dataTranslate?.landing?.speakerDeadline}
      />
    </>
  );
};

LandingPage.propTypes = {
  dataTranslate: PropTypes.object.isRequired
};

export default LandingPage;
