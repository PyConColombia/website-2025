import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

const GenericPage = ({ title, content }) => {
  return (
    <div className="generic-page">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h1 className="title">{title}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>{content}</Col>
        </Row>
      </Container>
    </div>
  );
};

GenericPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default GenericPage;
