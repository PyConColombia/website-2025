import propTypes from 'prop-types'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import data from '@/data/keynotes.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faGithubAlt,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

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
                  data?.keynotes?.map((keynote, index) => (
                    <Row key={index} className="keynote-speakers">
                      <Col xs={12} md={4} className={index % 2 === 0 ? "order-md-first" : "order-md-last"}>
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
                      <Col xs={12} md={8} className={index % 2 === 0 ? "order-md-last" : "order-md-first"}>
                        <div className={`keynote-text ${index % 2 === 0 ? "" : "text-right"}`}>
                          <h2 className="keynote-name shantell-sans">{keynote.first_name} {keynote.last_name}</h2>
                          <p className="keynote-title bold">{keynote.affiliation[language]}</p>
                          <p className="keynote-description">{keynote.biography[language]}</p>

                          <Row>
                            <Col xs={12} md={6}>
                              {/* <div className="keynote-link-wrapper">
                                <a href={`/keynotes/${keynote.id}`} rel="noopener noreferrer" className='keynote-link'>
                                  See more
                                </a>
                              </div> */}
                            </Col>
                            <Col xs={12} md={6}>
                              <div className="social-icons d-flex justify-content-center justify-content-md-end align-items-center gap-3">
                                {
                                  keynote?.twitter && (
                                    <a
                                      href={`https://twitter.com/${keynote.twitter}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="social-icon">
                                      <div className="fa-stack">
                                        <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                                        <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
                                      </div>
                                    </a>
                                  )
                                }
                                {
                                  keynote?.linkedin && (
                                    <a
                                      href={`https://www.linkedin.com/in/${keynote.linkedin}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="social-icon">
                                      <div className="fa-stack">
                                        <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                                        <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faLinkedinIn} />
                                      </div>
                                    </a>
                                  )
                                }
                                {
                                  keynote?.facebook && (
                                    <a
                                      href={`https://www.facebook.com/${keynote.facebook}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="social-icon">
                                      <div className="fa-stack">
                                        <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                                        <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faFacebookF} />
                                      </div>
                                    </a>
                                  )
                                }
                                {
                                  keynote?.instagram && (
                                    <a
                                      href={`https://www.instagram.com/${keynote.instagram}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="social-icon">
                                      <div className="fa-stack">
                                        <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                                        <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faInstagram} />
                                      </div>
                                    </a>
                                  )
                                }
                                {
                                  keynote?.github && (
                                    <a
                                      href={`https://github.com/${keynote.github}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="social-icon">
                                      <div className="fa-stack">
                                        <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                                        <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGithubAlt} />
                                      </div>
                                    </a>
                                  )
                                }
                              </div>
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
