import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Col, Container, Row, Button } from 'react-bootstrap';
import schedule from '@/data/schedule.json';
import talks from '@/data/talks.json';
import speakers from '@/data/speakers.json';
import rooms from '@/data/rooms.json';
import { normalizeTag } from '@/utils/fields';

const getTalk = (event_id) => {
  const talk = talks.find(t => t.id === event_id);
  return talk;
};

const getRoomName = (room) => {
  const roomData = rooms[room];
  return roomData?.name || room;
};

const getSpeakers = (speakersIds) => {
  return speakersIds.map(id => speakers.find(s => s.id === id));
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
};

const showNextPreviousButtons = (currentDate, showDate, handlePreviousDay, handleNextDay) => {
  return (
    <Col xs={12} md={10}>
      <Row>
        <Col xs={12} md={8}>
          {showDate && (
            <div className="schedule-date-title">
              <h2>{formatDate(currentDate.date)}</h2>
            </div>
          )}
        </Col>
        <Col xs={12} md={4}>
          <div className="schedule-buttons">
            {
              currentDate.previous_date && (
                <Button className="btn btn-primary btn-schedule" onClick={handlePreviousDay}>
                  Previous
                </Button>
              )
            }
            {
              currentDate.next_date && (
                <Button className="btn btn-primary btn-schedule" onClick={handleNextDay}>
                  Next
                </Button>
              )
            }
          </div>
        </Col>
      </Row>
    </Col>
  )
};

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(schedule[0]);
  const orders = currentDate.order || [];

  const handleNextDay = () => {
    const currentIndex = schedule.findIndex(d => d.date === currentDate.date);
    if (currentIndex < schedule.length - 1) {
      setCurrentDate(schedule[currentIndex + 1]);
      localStorage.setItem('currentDatePyCon', schedule[currentIndex + 1].date);
    }
  };

  const handlePreviousDay = () => {
    const currentIndex = schedule.findIndex(d => d.date === currentDate.date);
    if (currentIndex > 0) {
      setCurrentDate(schedule[currentIndex - 1]);
      localStorage.setItem('currentDatePyCon', schedule[currentIndex - 1].date);
    }
  };

  useEffect(() => {
    const currentDatePyCon = localStorage.getItem('currentDatePyCon');

    if (currentDatePyCon) {
      setCurrentDate(schedule.find(d => d.date === currentDatePyCon));
    }
  }, []);

  return (
    <div className={`generic-page keynotes-page schedule-page`}>
      <div className="generic-page-wrapper keynotes-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <h1 className="title">
                    <span className='title-wrapper'>Discover What&apos;s Coming Up</span>
                  </h1>
                  <p className="description">From inspiring keynotes to hands-on sessions, our schedule is packed with talks, workshops, and activities designed to spark ideas and fuel your passion for Python.</p>
                </Col>
                <Col lg={12} className='text-center'>
                  <Button className="btn btn-primary big"
                    as="a"
                    href="https://www.eventbrite.co/e/pycon-colombia-2025-tickets-1271703351959"
                    target="_blank">
                    Get your tickets
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center schedule-wrapper">
            {showNextPreviousButtons(currentDate, true, handlePreviousDay, handleNextDay)}
            <Row className="justify-content-center">
              <Col xs={12} md={10}>
                {orders.map((block, idx) => (
                  <div key={idx} className="schedule-block">
                    <div className="schedule-hour">{block.time}</div>
                    {block.events.map((event, eidx) => {
                      let title = event.title;
                      let talk = null;
                      if (!title && event.event_id && block.type === "talk") {
                        talk = getTalk(event.event_id);
                        title = talk?.title?.es || talk?.title?.en;
                      }
                      const location = event.room;
                      return (
                        <div key={eidx} className="schedule-card">
                          <div className="schedule-title">
                            {block.type === "talk" ? (
                              <NavLink className='shantell-sans' to={`/talks/${event.event_id}`}>{title}</NavLink>
                            ) : (
                              <span className='shantell-sans'>{title}</span>
                            )}
                          </div>
                          {
                            block.type === "talk" && (
                              <>
                                <div className="schedule-speakers">

                                  {getSpeakers(talk?.speakers || []).map(speaker => {
                                    return (
                                      <><NavLink key={speaker.id} to={`/speakers/${speaker.id}`}>{speaker.first_name} {speaker.last_name} </NavLink><br /></>
                                    )
                                  })}
                                </div>
                                <div className="tag">
                                  {talk?.spoken_language && (
                                    <span className='tag-language'>{talk.spoken_language === 'spanish' ? 'ES' : 'EN'}</span>
                                  )}
                                  {talk?.tags?.map(tag => (
                                    <span key={tag} className={`tag-item ${normalizeTag(tag)}`}>{tag}</span>
                                  ))}
                                </div>
                              </>
                            )
                          }
                          {
                            location && (
                              <div className="schedule-location">
                                <span className="location-icon">📍</span>
                                {getRoomName(location)}
                              </div>
                            )
                          }
                        </div>
                      );
                    })}
                  </div>
                ))}
              </Col>
            </Row>

            {showNextPreviousButtons(currentDate, false, handlePreviousDay, handleNextDay)}

          </Row>

        </Container>
      </div>
    </div >
  )
}

export default Schedule;
