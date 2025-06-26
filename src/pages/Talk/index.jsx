import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Speakers from '@/data/speakers.json'
import TalkList from '@/data/talks.json';

const findTalkById = (data, idToFind) => {
  return data.find(talk => String(talk.id) === String(idToFind));
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

const Talk = () => {
  const { id } = useParams();
  const language = localStorage.getItem('language') || 'en'

  const talk = findTalkById(TalkList, id);
  if (!talk) {
    return <div>404 Not Found</div>;
  }

  const { title, video_url, speakers, description, spoken_language, submission, tags } = talk;
  const speakerList = speakers.map(findSpeakerById);

  return (
    <div className='generic-page sponsor-page'>
      <div className="generic-page-wrapper sponsor-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              {
                title && <Row>
                  <Col>
                    <h1 className="description" dangerouslySetInnerHTML={{ __html: `[${formatLang(spoken_language)}] ${title[language] || title.en}` }}></h1>
                    {submission && (
                      <span className="badge bg-primary me-2 text-uppercase">{submission}</span>
                    )}
                    {tags && tags.length > 0 && (
                      <div className="mb-3">
                        {tags.map(tag => (
                          <span key={tag} className="badge bg-secondary me-2">{tag}</span>
                        ))}
                      </div>
                    )}
                  </Col>
                </Row>
              }

              <h2>Authors</h2>
              <Row className="mb-4">
                {speakerList.map(speaker => (
                  speaker && (
                    <Col xs={6} md={4} lg={3} key={speaker.id} className="text-center mb-3">
                      <a href={`/speakers/${speaker.id}`}>
                        <img
                          src={`/images/speakers/${speaker.photo || speaker.id + '.webp'}`}
                          alt={speaker.name}
                          className="img-fluid rounded-circle mb-2"
                          style={{ maxWidth: '120px', maxHeight: '120px', objectFit: 'cover' }}
                        />
                        <div>{speaker.name}</div>
                      </a>
                    </Col>
                  )
                ))}
              </Row>

              <h2>Description</h2>
              {description && (
                <Row>
                  <Col>
                    <p className="description" dangerouslySetInnerHTML={{ __html: description[language] || description.en }}></p>
                  </Col>
                </Row>
              )}


              {video_url && <div className="video-talk">
                <iframe
                  src={`https://www.youtube.com/embed/${video_url}`}
                  frameBorder="0"
                  allowFullScreen
                  className="video"
                  title={`YouTube video player for ${title?.en || ''}`}
                >
                </iframe>
              </div>}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Talk;
