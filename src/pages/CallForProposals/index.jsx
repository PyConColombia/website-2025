import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Image, Row } from 'react-bootstrap';

const CallForProposals = () => {
  return (
    <div className="generic-page">
      <div className="generic-page-wrapper">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h1 className="title">Share Your Voice</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={9}>
              <Row className="align-items-center">
                <Col lg={6}>
                  <Image
                    src="/images/content/call-speakers.webp"
                    alt="Hero"
                    width="100%"
                    height="auto"
                  />
                </Col>
                <Col lg={6}>
                  <p>
                    Got a brilliant idea, a project you&apos;re proud of, or insights that could
                    inspire others?
                  </p>
                  <p>
                    We’re looking for passionate speakers to lead talks on development, security,
                    Python, and beyond.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="talks-type">
          <div className="background-talks">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <p>
                    Feel free to submit proposals on a wide array of technical topics that pique
                    your interest. We&apos;re excited to explore the diverse ideas and insights you
                    bring to the table.
                  </p>
                  <a
                    className="btn btn-primary"
                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FHz8XQVdK69jmDfU3A&h=AT0IOqdymAyeMi7CiJtBIItwB-wELaOgW-eGUQh7wxb5sQEl_q_KRlth_GVTLHIxbZO4UP7YGd433U6B_XRp58w0d8y-xL3guAIMaxWIUwH4lW0o2Qtt8MmLkVRQlNLI55R12y-KkHgfQmFof-MqONyJ4Q&__tn__=-UK-R&c[0]=AT0dzMJXy6_WSi25KwJjaM0DDnzLbvLvSpPsWgEou9z1c9jk5aazzaN4qpPFY9hbtstGiW3cJwA58ZXLb6VGqNB0P6TZRHzKBgwTRBL58e__D53KU__Fz45IfJ77pTMY77FKW5hDmZbs7rhH3oXNs2MnurKzu3tzTVBRBRns0mV5675t56b2eCnfKwdQj6nqIVziMvNoNmlBvPTsQWJhq-1_lQ"
                    target="blank_">
                    Submit your proposal
                  </a>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <div className="type-wrapper">
                    <Row className="align-items-stretch">
                      <Col className="type-col" lg={6}>
                        <div className="type h-100 d-flex flex-column p-3">
                          <h3 className="type-title">Talks</h3>
                          <p>
                            Space of 40 minutes (Including Q & A, commonly distributed in 30 minutes
                            for talk, 10 minutes for questions). if which you can speak of any
                            subject.
                          </p>
                        </div>
                      </Col>
                      <Col className="type-col" lg={6}>
                        <div className="type h-100 d-flex flex-column p-3">
                          <h3 className="type-title">Talks</h3>
                          <p>
                            We will record the talks and upload them to our YouTube channel, this
                            includes a screen recording of the speaker’s slide deck, live demos, and
                            speaker’s in-person activity.
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
                  <h2 className="title">Frequent questions</h2>

                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">Topics</span>
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
                          If you want to know what are we interested in hearing about, you can take
                          a look at the talks & workshops line-up for past years (2017, 2018 , 2019
                          , 2020 ,2021 , and 2022).
                        </p>
                        <br />
                        <p>We like to see any kind of proposal related to the following topics:</p>
                        <br />
                        <ul>
                          <li>Data Science</li>
                          <li>Machine Learning</li>
                          <li>Deep Learning</li>
                          <li>Artificial Intelligence</li>
                          <li>Internet of Things (IoT)</li>
                          <li>Web Development</li>
                          <li>Internet of Things (IoT)</li>
                          <li>Micro-Python</li>
                          <li>Python Frameworks</li>
                        </ul>
                        <br />
                        <p>
                          Of course, not everything should be technical topics, here are our
                          alternative topics which we consider related to our conference:
                        </p>
                        <br />
                        <ul>
                          <li>Inclusion & Diversity</li>
                          <li>Community</li>
                          <li>Industry & Academy Bonding</li>
                          <li>Education & Soft Skills</li>
                          <li>People in STEM Life Quality</li>
                        </ul>
                        <br />
                        <p>
                          If your talk topic doesn&apos;t fill any of our listings but you are
                          really passionate about your talk, don&apos;t worry! we love people like
                          you, this is your conference! submit your proposal and maybe we will
                          discover new topics to improve our lists.
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

export default CallForProposals;
