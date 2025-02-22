import { useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { validateEmail } from '@/utils/fields';

const Subscribe = () => {
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
            FNAME: firstName || '',
            LNAME: lastName || '',
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
    <div className="content-wrapper bottom-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Row className="justify-content-center">
              <Col lg={6}>
                <Image src="/images/content/subscribe.webp" alt="Hero" width="100%" height="auto" />
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
  );
};

export default Subscribe;
