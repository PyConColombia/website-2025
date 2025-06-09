import PropTypes from 'prop-types';

import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import Social from '@/components/Social';

import data from '@/data/speakers.json'

const SpeakersList = ({ title, description, button, containerClasses }) => {
  const language = localStorage.getItem('language') || 'en'

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
                    data?.speakers?.map((keynote, index) => (
                      <Col
                        key={keynote.id || `${keynote.first_name}-${keynote.last_name}-${keynote.photo}`}
                        xs={12}
                        md={4}
                        className={index % 2 === 0 ? "order-md-first" : "order-md-last"}
                      >
                        <div className="keynote-image-wrapper">
                          <Image src={`images/keynotes/${keynote.photo}`} alt={`${keynote.first_name} ${keynote.last_name}`} className="keynote-image" />
                          {keynote.country && (
                            <div className="bandera bandera-superior">
                              <span className="flag">
                                {' '}
                                <span className={`fi fi-${keynote.country}`}></span>
                              </span>
                            </div>
                          )}
                          <img src={`/images/icons/icon-${index % 3}.svg`} className="bandera bandera-inferior" alt="Bandera inferior" />
                        </div>

                        <div className={`keynote-text`}>
                          <h2 className="keynote-name shantell-sans">{keynote.first_name} {keynote.last_name}</h2>
                          <div className="separator">
                            <Image src="/images/icons/speaker-separator.svg" alt="Separator" />
                          </div>
                          <p className="keynote-title">{keynote.affiliation[language] || keynote.affiliation['en']}</p>

                          <Social socialNetworks={keynote} />
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
