import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Questions = ({ dataTranslate }) => {
  const d = dataTranslate?.questions;

  return (
    <div className="">
      <div className="">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0" className="questions-item">
                  <Accordion.Header className="question-header">
                    <span className="question-title">{d?.eligibility?.title}</span>
                    <Image
                      src="/images/icons/question-button.svg"
                      alt="question"
                      className="question-icon"
                      width={40}
                      height={40}
                    />
                  </Accordion.Header>
                  <Accordion.Body className="question-body">
                    <p>{d?.eligibility?.paragraph1}</p>
                    <p>{d?.eligibility?.paragraph2}</p>
                    <p>{d?.eligibility?.paragraph3}</p>
                    <p>{d?.eligibility?.paragraph4}</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="questions-item">
                  <Accordion.Header className="question-header">
                    <span className="question-title">{d?.acknowledgments?.title}</span>
                    <Image
                      src="/images/icons/question-button.svg"
                      alt="question"
                      className="question-icon"
                      width={40}
                      height={40}
                    />
                  </Accordion.Header>
                  <Accordion.Body className="question-body">
                    <p>{d?.acknowledgments?.paragraph1}</p>
                    <p>{d?.acknowledgments?.paragraph2}</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="questions-item">
                  <Accordion.Header className="question-header">
                    <span className="question-title">{d?.importantDates?.title}</span>
                    <Image
                      src="/images/icons/question-button.svg"
                      alt="question"
                      className="question-icon"
                      width={40}
                      height={40}
                    />
                  </Accordion.Header>
                  <Accordion.Body className="question-body">
                    <ul>
                      {d?.importantDates?.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="questions-item">
                  <Accordion.Header className="question-header">
                    <span className="question-title">{d?.termsAndConditions?.title}</span>
                    <Image
                      src="/images/icons/question-button.svg"
                      alt="question"
                      className="question-icon"
                      width={40}
                      height={40}
                    />
                  </Accordion.Header>
                  <Accordion.Body className="question-body">
                    <p>{d?.termsAndConditions?.paragraph}</p>
                    <ul>
                      {d?.termsAndConditions?.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="questions-item">
                  <Accordion.Header className="question-header">
                    <span className="question-title">{d?.selectedHelp?.title}</span>
                    <Image
                      src="/images/icons/question-button.svg"
                      alt="question"
                      className="question-icon"
                      width={40}
                      height={40}
                    />
                  </Accordion.Header>
                  <Accordion.Body className="question-body">
                    <p>{d?.selectedHelp?.paragraph}</p>
                    <ul>
                      {d?.selectedHelp?.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

Questions.propTypes = {
  dataTranslate: PropTypes.object.isRequired,
};

export default Questions;
