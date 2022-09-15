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
          <Button variant='danger' href={props.RepoL}>
            Repo
          </Button>
          <Button variant='danger' href={props.LiveL}>
            Live
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

const styles = {
  card: {
    width: '18rem',
    margin: '1rem',
  },
  cImg: {
    height: '10rem',
  },
};

export default ProjectCard;
