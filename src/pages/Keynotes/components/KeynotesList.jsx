import propTypes from 'prop-types'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Social from '@/components/Social';

import data from '@/data/keynotes.json'

const KeynotesList = ({
  title, description, button, containerClasses
}) => {
  const language = localStorage.getItem('language') || 'en'

  return (
    <div className={`generic-page keynotes-page ${containerClasses}`}>
      <div className="generic-page-wrapper keynotes-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <h1 className="title">{title}</h1>
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
                {
                  data.map((keynote, index) => (
                    <Row key={index} className="keynote-speakers">
                      <Col xs={12}
                        sm={6}
                        md={6}
                        lg={4} className={index % 2 === 0 ? "order-md-first" : "order-md-last"}>
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
                      </Col>
                      <Col xs={12}
                        sm={6}
                        md={6}
                        lg={8}
                        className={index % 2 === 0 ? "order-md-last" : "order-md-first"}>
                        <div className={`keynote-text ${index % 2 === 0 ? "" : "text-right"}`}>
                          <h2 className="keynote-name shantell-sans">{keynote.first_name} {keynote.last_name}</h2>
                          <div className="separator">
                            <Image src="/images/icons/speaker-separator.svg" alt="Separator" />
                          </div>
                          <p className="keynote-title bold">{keynote.affiliation[language] || keynote.affiliation['en']}</p>
                          <p className="keynote-description">{keynote.biography[language] || keynote.biography['en']}</p>

                          <Row>
                            <Col xs={12} md={6}>
                              {/* <div className="keynote-link-wrapper">
                                <a href={`/keynotes/${keynote.id}`} rel="noopener noreferrer" className='keynote-link'>
                                  See more
                                </a>
                              </div> */}
                            </Col>
                            <Col xs={12} md={6}>
                              <Social socialNetworks={keynote} />
                            </Col>
                          </Row>

                        </div>
                      </Col>
                    </Row>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  )
}

KeynotesList.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  button: propTypes.string,
  containerClasses: propTypes.string
}

export default KeynotesList
