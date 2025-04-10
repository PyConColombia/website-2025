import PropTypes from 'prop-types';

import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Intro = ({
  title,
  subtitle,
  buttonName,
  buttonLink,
  descriptionText,
  subDescriptionText,
  speakerDeadline
}) => {
  return (
    <div className="intro-proposals">
      <Container>
        {title && (
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h1 className="title">{title}</h1>
            </Col>
          </Row>
        )}
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
                {subtitle && <h3 className="subtitle">{subtitle}</h3>}
                <p>{descriptionText}</p>
                <p className='bold'>{subDescriptionText}</p>
                <p className="bold">{speakerDeadline}</p>
                {buttonName && buttonLink && (
                  <NavLink to={buttonLink} className="btn btn-primary">
                    {buttonName}
                  </NavLink>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Intro.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonName: PropTypes.string,
  buttonLink: PropTypes.string,
  descriptionText: PropTypes.string,
  subDescriptionText: PropTypes.string,
  speakerDeadline: PropTypes.string
};

export default Intro;
