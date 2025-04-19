import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import sponsorList from '@/data/sponsors.json';
import Social from '@/components/Social';

const findSponsorById = (data, idToFind) => {
  for (const category in data) {
    const sponsor = data[category].find(s => s.id === idToFind);
    if (sponsor) {
      return { ...sponsor, category };
    }
  }
  return null;
}

const Sponsor = () => {
  const { id } = useParams();
  const language = localStorage.getItem('language') || 'en'

  const sponsor = findSponsorById(sponsorList, id);
  if (!sponsor) {
    return <div>404 Not Found</div>;
  }

  const { name, logo, text, social, photos } = sponsor;

  return (
    <div className='generic-page sponsor-page'>
      <div className="generic-page-wrapper sponsor-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Row>
                <Col lg={12}>
                  <div className="logo-wrapper">
                    <Image
                      src={`/images/sponsors/${logo}`}
                      alt={name}
                      width="100%"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={4}>
                  <h1 className='shantell-sans'>{name}</h1>
                </Col>
                <Col md={4}>
                  <Social socialNetworks={social} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="description" dangerouslySetInnerHTML={{ __html: text[language] || text.en }}></p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="photos">
                    <Carousel>
                      {
                        photos && photos.map((photo, index) => (
                          <Carousel.Item key={index} interval={1000}>
                            <Image
                              src={`/images/sponsors/${id}/${photo}`}
                              alt={`${name} ${index + 1}`}
                              width="100%"
                            />
                          </Carousel.Item>
                        ))
                      }
                    </Carousel>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Sponsor;