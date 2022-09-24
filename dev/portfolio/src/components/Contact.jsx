import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Styled from 'styled-components';
import { send } from '@emailjs/browser';

const ContactContainer = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  color: white;
  padding-bottom: 5rem;
  width: 100%;
  box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);

  .err {
    color: red;
    font-size: 1.5rem;
    text-align: center;
  }

  .succ {
    color: green;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const CForm = Styled(Form)`
  width: 30%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Contact = () => {
  const [data, setData] = React.useState({
    cName: '',
    cEmail: '',
    cMessage: '',
  });
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [successMsg, setSuccessMsg] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    send('service_4043d22', 'template_jrzrjdh', data, 'CL0Ob1LHZoc2hCns7')
      .then((response) => {
        setSuccessMsg('Message sent successfully!');
        setData({
          cName: '',
          cEmail: '',
          cMessage: '',
        });
      })
      .catch((err) => {
        setErrorMsg('Something went wrong, please try again.');
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactContainer id='contact'>
      <h1 style={styles.h1}>Contact</h1>
      {errorMsg && <p className='err'>{errorMsg}</p>}
      {successMsg && <p className='succ'>{successMsg}</p>}
      <CForm onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name'
            name='cName'
            onChange={handleChange}
            value={data.cName}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>E-Mail Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='E-Mail Address'
            name='cEmail'
            onChange={handleChange}
            value={data.cEmail}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Message'
            name='cMessage'
            onChange={handleChange}
            value={data.cMessage}
            required
          />
        </Form.Group>
        <Button style={styles.btn} type='submit'>
          Submit
        </Button>
      </CForm>
    </ContactContainer>
  );
};
const styles = {
  h1: {
    alignSelf: 'center',
    fontSize: '5rem',
    fontWeight: 'bold',
    margin: '4rem 0',
  },
  btn: {
    backgroundColor: 'rgb(255, 0, 0)',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
};
export default Contact;
