import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Image, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Intro from '@/pages/CallForProposals/components/Intro';

const CallForProposals = ({dataTranslate}) => {
  return (
    <div className="generic-page">
      <div className="generic-page-wrapper">
        <Intro title={dataTranslate?.callForProposals?.header}/>
        <div className="talks-type">
          <div className="background-talks">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <p>
                    {dataTranslate?.callForProposals?.mainText}
                  </p>
                  <a
                    className="btn btn-primary"
                    href="https://forms.gle/Hz8XQVdK69jmDfU3A"
                    target="blank_">
                    {dataTranslate?.callForProposals?.buttonText}
                  </a>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <div className="type-wrapper">
                    <Row className="align-items-stretch">
                      <Col className="type-col" lg={6}>
                        <div className="type h-100 d-flex flex-column p-3">
                          <h3 className="type-title">{dataTranslate?.callForProposals?.block1Title}</h3>
                          <p>
                          {dataTranslate?.callForProposals?.block1Text}
                          </p>
                        </div>
                      </Col>
                      <Col className="type-col" lg={6}>
                        <div className="type h-100 d-flex flex-column p-3">
                          <h3 className="type-title">{dataTranslate?.callForProposals?.block2Title}</h3>
                          <p>
                          {dataTranslate?.callForProposals?.block2Text}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="questions">
          <div className="background-questions">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <h2 className="title">{dataTranslate?.callForProposals?.frequentQuestion?.title}</h2>

                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">{dataTranslate?.callForProposals?.frequentQuestion?.topics?.title}</span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                        {dataTranslate?.callForProposals?.frequentQuestion?.topics?.text1}{' '}
                          <a
                            href="https://www.youtube.com/@PyconColombia"
                            target="_blank"
                            rel="noopener noreferrer">
                            {dataTranslate?.callForProposals?.frequentQuestion?.topics?.linkText}
                          </a>
                          .
                        </p>

                        <p>{dataTranslate?.callForProposals?.frequentQuestion?.topics?.text2}</p>

                        <ul>
                        {dataTranslate?.callForProposals?.frequentQuestion?.topics?.mainTopics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>

                        <p>
                        {dataTranslate?.callForProposals?.frequentQuestion?.topics?.text3}
                        </p>

                        <ul>
                        {dataTranslate?.callForProposals?.frequentQuestion?.topics?.alternativeTopics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>

                        <p>
                        {dataTranslate?.callForProposals?.frequentQuestion?.topics?.text4}
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">
                        {dataTranslate?.callForProposals?.frequentQuestion?.whySpeak?.title}
                        </span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                          {dataTranslate?.callForProposals?.frequentQuestion?.whySpeak?.text}
                        </p>

                        <ul>
                        {dataTranslate?.callForProposals?.frequentQuestion?.whySpeak?.perks.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">{dataTranslate?.callForProposals?.frequentQuestion?.selectionProcess?.title}</span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                        {dataTranslate?.callForProposals?.frequentQuestion?.selectionProcess?.text1}
                        </p>

                        <ol>
                        {dataTranslate?.callForProposals?.frequentQuestion?.selectionProcess?.steps.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ol>

                        <p>
                        {dataTranslate?.callForProposals?.frequentQuestion?.selectionProcess?.text2}
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">{dataTranslate?.callForProposals?.frequentQuestion?.codeOfConduct?.title}</span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                          {dataTranslate?.callForProposals?.frequentQuestion?.codeOfConduct?.text}
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

CallForProposals.propTypes = {
  dataTranslate: PropTypes.object.isRequired
};
export default CallForProposals;
