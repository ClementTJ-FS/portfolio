import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section style={styles.container} id='contact'>
      <h1 style={styles.h1}>Contact</h1>
      <Form style={styles.cForm}>
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
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </section>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white',
    padding: '5rem 0',
  },
  h1: {
    alignSelf: 'center',
  },
  cForm: {
    width: '30%',
    margin: 'auto',
    marginTop: '5rem',
  },
};
export default Contact;
