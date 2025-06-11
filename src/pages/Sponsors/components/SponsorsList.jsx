import PropTypes from 'prop-types';

import { Col, Container, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import sponsorList from '@/data/sponsors.json';

const SponsorsList = ({ title, description, footer, containerClasses }) => {
  const sponsorSize = {
    venue: '12',
    diamond: '11',
    platinum: '10',
    gold: '9',
    silver_plus: '8',
    silver: '7',
    bronze: '6',
    startup: '5',
    media: '4'
  };

  const sponsorSizeSmall = {
    venue: '12',
    diamond: '11',
    platinum: '10',
    gold: '9',
    silver_plus: '8',
    silver: '7',
    bronze: '6',
    startup: '5',
    media: '4'
  };

  const sponsorHeight = {
    venue: '200px',
    diamond: '170px',
    platinum: '150px',
    gold: '130px',
    silver_plus: '120px',
    silver: '100px',
    bronze: '80px',
    startup: '75px',
    media: '70px'
  };

  const sponsorLabels = {
    bronze: 'Bronze',
    gold: 'Gold',
    venue: 'Venue',
    startup: 'Startup',
    media: 'Media Parter'
  };

  return (
    <div className={`generic-page sponsors-page ${containerClasses}`}>
      <div className="generic-page-wrapper sponsors-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Row>
                <Col lg={12}>
                  <h1 className="title">{title}</h1>
                  <p className="description">{description}</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={10}>
              <Row>
                <Col lg={12}>
                  <div className="sponsors-wrapper">
                    {Object.keys(sponsorList).map((sponsorType) => {
                      const sponsors = sponsorList[sponsorType];
                      if (!sponsors.length) return null;

                      return (
                        <div key={sponsorType}>
                          <Row className="sponsor-title-wrapper">
                            <h4 className="shantell-sans sponsor-title">
                              {sponsorLabels[sponsorType]}
                            </h4>
                          </Row>
                          <Row className="sponsor-category justify-content-center">
                            {sponsors.map((sponsor) => (
                              <Col
                                key={sponsor.name}
                                xs={sponsorSizeSmall[sponsorType]}
                                md={sponsorSize[sponsorType]}>
                                <NavLink
                                  to={`/sponsors/${sponsor.id}`}
                                  className="sponsor">
                                  {sponsor.logo ? (
                                    <Image
                                      src={`/images/sponsors/${sponsor.logo}`}
                                      alt={sponsor.name}
                                      width="100%"
                                      height={sponsorHeight[sponsorType]}
                                    />
                                  ) : (
                                    <div>{sponsor.name}</div>
                                  )}
                                </NavLink>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      );
                    })}
                  </div>
                </Col>
                {footer && (
                  <Col lg={12}>
                    <p className="description">{footer}</p>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

SponsorsList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.string,
  containerClasses: PropTypes.string
};

export default SponsorsList;
