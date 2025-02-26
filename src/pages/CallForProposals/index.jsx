import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Intro from '@/pages/CallForProposals/components/Intro';

const CallForProposals = () => {
  return (
    <div className="generic-page">
      <div className="generic-page-wrapper">
        <Intro title={'Share Your Voice'} />
        <div className="talks-type">
          <div className="background-talks">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <p>
                    Feel free to submit proposals on a wide array of technical topics that pique
                    your interest. We&apos;re excited to explore the diverse ideas and insights you
                    bring to the table.
                  </p>
                  <a
                    className="btn btn-primary"
                    href="https://forms.gle/Hz8XQVdK69jmDfU3A"
                    target="blank_">
                    Submit your proposal
                  </a>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <div className="type-wrapper">
                    <Row className="align-items-stretch">
                      <Col className="type-col" lg={6}>
                        <div className="type h-100 d-flex flex-column p-3">
                          <h3 className="type-title">Talks</h3>
                          <p>
                            This is a space of 40 minutes (Including Q & A, commonly distributed in
                            30 minutes for talk, 10 minutes for questions). if which you can speak
                            of any subject (Not only Python-centric themes) using a slide deck and
                            live demos if you wish
                          </p>
                        </div>
                      </Col>
                      <Col className="type-col" lg={6}>
                        <div className="type h-100 d-flex flex-column p-3">
                          <h3 className="type-title">Talk Videos</h3>
                          <p>
                            We will record the talks and upload them to our YouTube channel, this
                            includes a screen recording of the speaker&apos;s slide deck, live
                            demos, and speaker&apos;s in-person activity. This benefits all the
                            members of the Python community who can&apos;t make it to PyCon
                            Colombia. By submitting your proposal to PyCon Colombia, you agree to
                            give us permission to record, edit and release audio and/or video of
                            your presentation. If you aren&apos;t ok with this, please let us know
                            and we will work this out.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="questions">
          <div className="background-questions">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <h2 className="title">Frequent questions</h2>

                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">Topics</span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                          If you want to know what are we interested in hearing about, you can take
                          a look at the talks & workshops line-up for past years (2017, 2018 , 2019
                          , 2020 ,2021 , and 2022).
                        </p>

                        <p>We like to see any kind of proposal related to the following topics:</p>

                        <ul>
                          <li>Data Science</li>
                          <li>Machine Learning</li>
                          <li>Deep Learning</li>
                          <li>Artificial Intelligence</li>
                          <li>Internet of Things (IoT)</li>
                          <li>Web Development</li>
                          <li>Internet of Things (IoT)</li>
                          <li>Micro-Python</li>
                          <li>Python Frameworks</li>
                        </ul>

                        <p>
                          Of course, not everything should be technical topics, here are our
                          alternative topics which we consider related to our conference:
                        </p>

                        <ul>
                          <li>Inclusion & Diversity</li>
                          <li>Community</li>
                          <li>Industry & Academy Bonding</li>
                          <li>Education & Soft Skills</li>
                          <li>People in STEM Life Quality</li>
                        </ul>

                        <p>
                          If your talk topic doesn&apos;t fill any of our listings but you are
                          really passionate about your talk, don&apos;t worry! we love people like
                          you, this is your conference! submit your proposal and maybe we will
                          discover new topics to improve our lists.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">
                          Why should you speak at PyCon Colombia 2024?
                        </span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                          We strongly believe that if you have something you are really passionate
                          about and you want to spread the word, you should craft a talk and do it!
                          but, if that&apos;s not enough to convince you, here is the list of perks
                          you get by becoming a PyCon Colombia 2024 speaker:
                        </p>

                        <ul>
                          <li>
                            Free full conference pass: Gives you access to all talks and workshops.
                          </li>
                          <li>
                            Access to Speaker dinner: Dinner that includes keynotes speakers,
                            sponsors, speakers and organizers, fully paid by the conference.
                          </li>
                          <li>
                            A professionally produced video of your talk published in our YouTube
                            channel (see Talk Videos section for more details)
                          </li>
                          <li>
                            The opportunity to positively impact the lives of over 600 attendees.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">Our Selection Process</span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                          In order to create the most valuable talks and workshops line-up for the
                          conference we follow this process:
                        </p>

                        <ol>
                          <li>
                            All proposals reviews are anonymized, that way we avoid the bias towards
                            the submitter.
                          </li>
                          <li>All proposals are reviewed and voted by our Reviewers Team.</li>
                          <li>
                            The best-rated proposals are de-anonymized to review the speaker&apos;s
                            profile, this is made by the PyCon Colombia&apos;s Talks Committee.
                          </li>
                          <li>The Committee decides the final line-up.</li>
                        </ol>

                        <p>
                          We are really excited to get a lot more excellent submissions than we have
                          speaking slots. This process helps us to get the best proposals by trying
                          to avoid the bias to the speaker profile.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="questions-item">
                      <Accordion.Header className="question-header">
                        <span className="question-title">Code of Conduct</span>
                        <Image
                          src="/images/icons/question-button.svg"
                          alt="question"
                          className="question-icon"
                          width={40}
                          height={40}
                        />
                      </Accordion.Header>
                      <Accordion.Body className="question-body">
                        <p>
                          In order to create an environment that is safe and comfortable for all our
                          attendees and staff members and to make sure everybody enjoys the
                          conference. We have written this code of conduct . We hope you read,
                          understand and comply with it during the conference and in your proposal
                          and talk
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForProposals;
