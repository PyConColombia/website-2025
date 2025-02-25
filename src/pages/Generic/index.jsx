import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

const GenericPage = ({ title, content }) => {
  return (
    <div className="generic-page">
      <div className="generic-page-wrapper">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={9}>
              <h1 className="title">{title}</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={9}>{content}</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

GenericPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default GenericPage;
