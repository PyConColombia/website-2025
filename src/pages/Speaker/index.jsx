import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';

import Speakers from '@/data/speakers.json'
import TalkList from '@/data/talks.json';
import Social from '@/components/Social';

const findTalksBySpeakerId = (speakerId) => {
  return TalkList.filter(talk => talk.speakers.includes(speakerId));
}

const findSpeakerById = (speakerId) => {
  return Speakers.find(speaker => speaker.id === speakerId);
}

const formatLang = (language) => {
  const langMap = {
    spanish: "ES",
    english: "EN"
  }

  return langMap[language]
}

const Speaker = () => {
  const { id } = useParams();
  const language = localStorage.getItem('language') || 'en'

  const speaker = findSpeakerById(id);
  if (!speaker) {
    return <div>404 Not Found</div>;
  }

  const { first_name, last_name, photo, biography, country } = speaker;
  const name = `${first_name} ${last_name}`;
  const talks = findTalksBySpeakerId(id);

  return (
    <div className='generic-page speaker-page'>
      <div className="generic-page-wrapper sponsor-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={9}>
              <Row className="justify-content-center">
                <Col xs={12} md={4}>
                  <div className="keynote-image-wrapper">
                    <Image src={`images/speakers/${photo}`} alt={`${first_name} ${last_name}`} className="keynote-image" />
                    {speaker.country && (
                      <div className="bandera bandera-superior">
                        <span className="flag">
                          {' '}
                          <span className={`fi fi-${country}`}></span>
                        </span>
                      </div>
                    )}
                    <Image src={`/images/icons/icon-${Math.floor(Math.random() * 3)}.svg`} className="bandera bandera-inferior" alt="Bandera inferior" />
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  {
                    name && <Row>
                      <Col>
                        <h2 className="keynote-name shantell-sans" dangerouslySetInnerHTML={{ __html: `${name}` }}></h2>
                        <div className="separator">
                          <Image src="/images/icons/speaker-separator.svg" alt="Separator" />
                        </div>
                        <p className="keynote-title bold">{speaker.affiliation[language] || speaker.affiliation['en']}</p>
                      </Col>
                    </Row>
                  }
                  <Row>
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={8}>
                      <Social socialNetworks={speaker} hasLogo={true} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <Row>
                    <Col>
                      <p className="description" dangerouslySetInnerHTML={{ __html: `${biography[language] || biography.en}` }}></p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="separator">
                        <Image src="/images/icons/speaker-separator.svg" alt="Separator" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      { talks && (
                        <ul>
                          {talks.map((talk) => (
                            <li key={talk.id} className='tag'>
                              <NavLink to={`/talks/${talk.id}`} className="talk-link">
                                <span className="tag-language light-color medium-size">{talk.submission}</span>
                                <span className="tag-language light-color medium-size">{formatLang(talk.spoken_language)}</span>
                                <span className="talk-name shantell-sans">{talk.title[language] || talk.title.en}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  )
}

export default Speaker;
