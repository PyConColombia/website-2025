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
                  <button className="btn btn-primary">Submit your proposal</button>
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
      </div>
    </div>
  );
};

export default CallForProposals;
