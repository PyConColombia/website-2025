import PropTypes from 'prop-types';

import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import Social from '@/components/Social';

import data from '@/data/team.json'

const TeamList = ({ title, description, button, containerClasses }) => {
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
                    data?.team?.map((teamMember, index) => (
                      <Col
                        key={teamMember.id || `${teamMember.first_name}-${teamMember.last_name}-${teamMember.photo}`}
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                      >
                        <div className="keynote-image-wrapper">
                          <Image src={`images/team/${teamMember.photo}`} alt={`${teamMember.first_name} ${teamMember.last_name}`} className="keynote-image" />
                          <img src={`/images/icons/icon-${index % 3}.svg`} className="bandera bandera-inferior" alt="Bandera inferior" />
                        </div>

                        <div className={`keynote-text`}>
                          <h4 className="keynote-name shantell-sans">{teamMember.first_name} {teamMember.last_name}</h4>
                          <div className="separator">
                            <Image src="/images/icons/speaker-separator.svg" alt="Separator" />
                          </div>
                          <p className="keynote-title">{teamMember.responsibility[language] || teamMember.responsibility['en']}</p>

                          <Social socialNetworks={teamMember} />
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

TeamList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string,
  containerClasses: PropTypes.string
};

export default TeamList
