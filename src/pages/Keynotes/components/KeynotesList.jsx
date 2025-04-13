import propTypes from 'prop-types'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

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
                  data?.keynotes?.map((keynote, index) => (
                    <Row key={index} className="keynote-speakers">
                      <Col xs={12} md={4}>
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
                          {/* <img src="ruta-bandera-superior.png" class="bandera bandera-superior" alt="Bandera superior" /> */}
                          <img src="ruta-bandera-inferior.png" className="bandera bandera-inferior" alt="Bandera inferior" />
                        </div>
                      </Col>
                      <Col xs={12} md={8}>
                        <h2 className="keynote-name">{keynote.first_name} {keynote.last_name}</h2>
                        <p className="keynote-description">{keynote.biography[language]}</p>
                      </Col>
                    </Row>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

KeynotesList.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  button: propTypes.string,
  containerClasses: propTypes.string
}

export default KeynotesList
