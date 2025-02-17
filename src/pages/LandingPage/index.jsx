import { Col, Container, Row } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div className="content-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col lg={3}>
            <h1>Landing Page</h1>
            <p>
              This is a landing page. You can add your content here. You can also add more
              components to this page.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
