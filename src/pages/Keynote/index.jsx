import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import keynotes from '@/data/keynotes.json';
import Social from '@/components/Social';

const findKeynoteById = (keynoteId) => {
  return keynotes.find(keynote => keynote.id === keynoteId);
};

const Keynote = () => {
  const { id } = useParams();
  const language = localStorage.getItem('language') || 'en';

  const keynote = findKeynoteById(id);
  if (!keynote) {
    return <div>404 Not Found</div>;
  }

  const { first_name, last_name, photo, biography, affiliation, country, keynote_video, interview_video } = keynote;
  const name = `${first_name} ${last_name}`;
  const labels = {
    keynote: language === 'es' ? 'Keynote' : 'Keynote',
    interview: language === 'es' ? 'Entrevista' : 'Interview',
  };

  return (
    <div className='generic-page speaker-page'>
      <div className="generic-page-wrapper sponsor-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={9}>
              <Row className="justify-content-center">
                <Col xs={12} md={4}>
                  <div className="keynote-image-wrapper">
                    <Image src={`images/keynotes/${photo}`} alt={name} className="keynote-image" />
                    {country && (
                      <div className="bandera bandera-superior">
                        <span className="flag">
                          {' '}
                          <span className={`fi fi-${country}`}></span>
                        </span>
                      </div>
                    )}
                    <Image src={`/images/icons/icon-0.svg`} className="bandera bandera-inferior" alt="Bandera inferior" />
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <Row>
                    <Col>
                      <h1 className="keynote-name shantell-sans">{name}</h1>
                      <div className="separator">
                        <Image src="/images/icons/speaker-separator.svg" alt="Separator" />
                      </div>
                      <p className="keynote-title bold">{affiliation[language] || affiliation.en}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={8}>
                      <Social socialNetworks={keynote} hasLogo={true} />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col xs={12}>
                  <Row>
                    <Col>
                      <p className="description" dangerouslySetInnerHTML={{ __html: biography[language] || biography.en }}></p>
                    </Col>
                  </Row>

                  {keynote_video && (
                    <Row>
                      <Col>
                        <h4>{labels.keynote}</h4>
                        <div className="video-talk">
                          <iframe
                            src={`https://www.youtube.com/embed/${keynote_video}`}
                            frameBorder="0"
                            allowFullScreen
                            className="video"
                            title={`${name} - ${labels.keynote}`}
                          />
                        </div>
                      </Col>
                    </Row>
                  )}

                  {interview_video && (
                    <Row>
                      <Col>
                        <h4>{labels.interview}</h4>
                        <div className="video-talk">
                          <iframe
                            src={`https://www.youtube.com/embed/${interview_video}`}
                            frameBorder="0"
                            allowFullScreen
                            className="video"
                            title={`${name} - ${labels.interview}`}
                          />
                        </div>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Keynote;
