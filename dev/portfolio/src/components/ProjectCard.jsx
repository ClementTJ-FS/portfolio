import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Card style={styles.card}>
      <Card.Img variant='top' src='holder.js/100px180' style={styles.cImg} />
      <Card.Body>
        <Card.Title>{props.cTitle}</Card.Title>
        <Card.Text>{props.cBody}</Card.Text>
        <Container className='d-flex justify-content-between px-5'>
          <Button href={props.RepoL} style={styles.cBtn}>
            Repo
          </Button>
          <Button href={props.LiveL} style={styles.cBtn}>
            Live
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    minWidth: '18rem',
    maxWidth: '18rem',
    height: '20rem',
    margin: '1rem',
  },
  cImg: {
    height: '10rem',
  },
  cBtn: {
    backgroundColor: 'red',
    border: 'none',
  },
};

export default ProjectCard;
