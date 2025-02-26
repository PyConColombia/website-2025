import PropTypes from 'prop-types';

import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Intro = ({ title, subtitle, buttonName, buttonLink }) => {
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
                <p>
                  Got a brilliant idea, a project you&apos;re proud of, or insights that could
                  inspire others?
                </p>
                <p>
                  We’re looking for passionate speakers to lead talks on development, security,
                  Python, and beyond.
                </p>
                <p className="bold">Closes on April 6th 2025</p>
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
  buttonLink: PropTypes.string
};

export default Intro;
