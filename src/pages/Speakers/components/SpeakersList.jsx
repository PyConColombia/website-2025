import PropTypes from 'prop-types';

import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import Social from '@/components/Social';

import data from '@/data/speakers.json'

const SpeakersList = ({ title, description, button, containerClasses }) => {
  const language = localStorage.getItem('language') || 'en'

  let speakersData = data?.speakers || [];
  // order speakers by first name
  speakersData = speakersData.sort((a, b) => {
    const nameA = a.first_name.toLowerCase();
    const nameB = b.first_name.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <div className={`generic-page keynotes-page ${containerClasses}`}>
      <div className="generic-page-wrapper keynotes-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <h1 className="title">
                    <span className='title-wrapper'>{title}</span>
                  </h1>
                  <p className="description">{description}</p>
                </Col>
                <Col lg={12} className='text-center'>
                  {
                    button && (<Button className="btn btn-primary big"
                      as="a"
                      href="https://www.eventbrite.co/e/pycon-colombia-2025-tickets-1271703351959"
                      target="_blank">
                      {button}
                    </Button>)
                  }
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={9}>
              <div className="keynotes-wrapper">
                <Row className="keynote-speakers justify-content-center">
                  {
                    speakersData?.map((speaker, index) => (
                      <Col
                        key={speaker.id || `${speaker.first_name}-${speaker.last_name}-${speaker.photo}`}
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                      >
                        <div className="keynote-image-wrapper">
                          <Image src={`images/speakers/${speaker.photo}`} alt={`${speaker.first_name} ${speaker.last_name}`} className="keynote-image" />
                          {speaker.country && (
                            <div className="bandera bandera-superior">
                              <span className="flag">
                                {' '}
                                <span className={`fi fi-${speaker.country}`}></span>
                              </span>
                            </div>
                          )}
                          <img src={`/images/icons/icon-${index % 3}.svg`} className="bandera bandera-inferior" alt="Bandera inferior" />
                        </div>

                        <div className={`keynote-text`}>
                          <h4 className="keynote-name shantell-sans">{speaker.first_name} {speaker.last_name}</h4>
                          <div className="separator">
                            <Image src="/images/icons/speaker-separator.svg" alt="Separator" />
                          </div>
                          <p className="keynote-title">{speaker.affiliation[language] || speaker.affiliation['en']}</p>

                          <Social socialNetworks={speaker} />
                        </div>

                      </Col>
                    ))
                  }
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  )
}

SpeakersList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string,
  containerClasses: PropTypes.string
};

export default SpeakersList
