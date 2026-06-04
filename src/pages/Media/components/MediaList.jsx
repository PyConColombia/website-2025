import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

import articles from '@/data/media.json';

const MediaList = ({ title, description, readArticleLabel, containerClasses }) => {
  const language = localStorage.getItem('language') || 'en';

  return (
    <div className={`generic-page media-page ${containerClasses || ''}`}>
      <div className="generic-page-wrapper sponsors-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h1 className="title">{title}</h1>
              {description && <p className="description text-center">{description}</p>}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <ul className="media-list">
                {articles.map((article) => (
                  <li key={article.id} className="media-item">
                    <span className="media-source">{article.source}</span>
                    <h2 className="media-title shantell-sans">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="media-link"
                      >
                        {article.title[language] || article.title.en}
                      </a>
                    </h2>
                    <p className="media-description">
                      {article.description[language] || article.description.en}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-read-link link-pink"
                    >
                      {readArticleLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

MediaList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  readArticleLabel: PropTypes.string,
  containerClasses: PropTypes.string
};

export default MediaList;
