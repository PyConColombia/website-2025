import { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { validateEmail } from '@/utils/fields';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [blockButton, setBlockButton] = useState(true);

  const onRequiredChange = (e) => {
    const requiredFields = ['email'];
    const fieldName = e.target.name;
    const newValue = e.target.value;
    const setValues = {
      email: setEmail
    };

    if (fieldName === 'email') {
      setBlockButton(requiredFields.includes(fieldName) && (!newValue || !validateEmail(newValue)));
    }

    if (fieldName in setValues) setValues[fieldName](newValue);
  };

  const onSumitForm = async (e) => {
    e.preventDefault();

    try {
      fetch(
        `https://pycon.us21.list-manage.com/subscribe/post-json?` +
          new URLSearchParams({
            u: 'b17171278920cd24d0c9c4cfe',
            id: '785e2a687f',
            FNAME: firstName,
            LNAME: lastName,
            EMAIL: email,
            subscribe: 'Subscribe'
          }),
        {
          method: 'GET',
          mode: 'no-cors'
        }
      ).then((response) => {
        console.log(response.status);
        console.log(response);
      });

      setShowAlert(true);
      setAlertType('success');
      setAlertMessage('Thanks for your interest!');
      setEmail('');
      setFirstName('');
      setLastName('');
      setBlockButton(true);
    } catch (error) {
      console.error('Error:', error);

      setShowAlert(true);
      setAlertType('danger');
      setAlertMessage('Something went wrong, please try again later!');
    } finally {
      if (showAlert) {
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    }
  };

  return (
    <>
      <div className="content-wrapper top-section">
        <div className="description">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <Row>
                      <div className="logo-wrapper">
                        <Image
                          src="/images/logo.webp"
                          alt="Logo"
                          width="100%"
                          height="auto"
                          className="img-fluid"
                        />
                      </div>
                    </Row>
                    <Row>
                      <Col sm={6} lg={6}>
                        <span className="subtitle">Medellín, Colombia</span>
                        <span className="subtitle date-text">Jun 20, 21 & 22</span>
                      </Col>
                      <Col sm={5} lg={5}>
                        <div className="wrapper-date">
                          <span className="date">2025</span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg={5}>
                    <div className="question-ticket">
                      <h2>
                        Ready to dive into the <span className="bold-text">world of Python</span>?
                      </h2>
                      <span className="question-description">
                        Come explore, learn, and connect with others just as passionate as you are.
                      </span>
                      <button className="btn btn-primary button-ticket">Get your tickets</button>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <Image
                      src="/images/content/description.webp"
                      alt="Hero"
                      width="100%"
                      height="auto"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="content-topics">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="topics-container">
                <div className="topics-scroll">
                  <div className="topic">Mobile</div>
                  <div className="topic">Development</div>
                  <div className="topic">Testing</div>
                  <div className="topic">Blockchain</div>
                  <div className="topic">Artifial Intelligence</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="content-wrapper bottom-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Row className="justify-content-center">
                <Col lg={6}>
                  <Image
                    src="/images/content/subscribe.webp"
                    alt="Hero"
                    width="100%"
                    height="auto"
                  />
                </Col>
                <Col lg={5} className="ms-auto">
                  <div className="content-form">
                    <h2 className="form-title">
                      Want to <span className="bold-text">know more</span>?
                    </h2>
                    {showAlert && (
                      <Alert variant={alertType}>
                        <p>{alertMessage}</p>
                      </Alert>
                    )}

                    <Form>
                      <Form.Group className="mb-3 form-group">
                        <Form.Control
                          className="form-input"
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3 form-group">
                        <Form.Control
                          className="form-input"
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3 form-group">
                        <Form.Control
                          className="form-input"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => onRequiredChange(e)}
                          required
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        onClick={onSumitForm}
                        className="button-submit"
                        disabled={blockButton}>
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
