import { Col, Container, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import sponsorList from '@/data/sponsors.json';

const sponsors = () => {
  const sponsorSize = {
    venue: '12',
    diamond: '11',
    platinum: '10',
    gold: '9',
    silver_plus: '8',
    silver: '7',
    bronze: '6'
  };

  const sponsorSizeSmall = {
    venue: '12',
    diamond: '11',
    platinum: '10',
    gold: '9',
    silver_plus: '8',
    silver: '7',
    bronze: '6'
  };

  return (
    <div className="generic-page sponsors-page">
      <div className="generic-page-wrapper sponsors-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Row>
                <Col lg={12}>
                  <h1 className="title">Meet Our Sponsors:</h1>
                  <p className="description">
                    From cutting-edge tech companies to dedicated community advocates, these
                    sponsors are leading the way in Python and software development.
                  </p>
                </Col>
                <Col lg={12}>
                  <div className="sponsors-wrapper">
                    {Object.keys(sponsorList).map((sponsorType) => {
                      const sponsors = sponsorList[sponsorType]; // Get the array of sponsors for this type
                      if (!sponsors.length) return null; // Skip empty categories

                      return (
                        <Row key={sponsorType} className="sponsor-category">
                          {sponsors.map((sponsor) => (
                            <Col
                              key={sponsor.name}
                              xs={sponsorSizeSmall[sponsorType]}
                              md={sponsorSize[sponsorType]}>
                              <NavLink to={sponsor.url || '#'} target="blank_" className="sponsor">
                                {sponsor.logo ? (
                                  <Image
                                    src={`/images/sponsors/${sponsor.logo}`}
                                    alt={sponsor.name}
                                    width="100%"
                                    height="auto"
                                  />
                                ) : (
                                  <div>{sponsor.name}</div>
                                )}
                              </NavLink>
                            </Col>
                          ))}
                        </Row>
                      );
                    })}
                  </div>
                </Col>
                <Col lg={12}>
                  <p className="description">
                    We couldn’t do it without them—thank you for your commitment to advancing the
                    future of Python!
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default sponsors;
