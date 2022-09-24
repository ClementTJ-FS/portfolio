import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Styled from 'styled-components';

const ContactContainer = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  color: white;
  padding-bottom: 5rem;
  width: 100%;
  box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.75);
`;

const CForm = Styled(Form)`
  width: 30%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <h1 style={styles.h1}>Contact</h1>
      <CForm>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>E-Mail Address</Form.Label>
          <Form.Control type='email' placeholder='E-Mail Address' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Message' />
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
