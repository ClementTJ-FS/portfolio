import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Styled from 'styled-components';

const PCard = Styled(Card)`
  min-width: 18rem;
  width: 18rem;
  height: 26rem;
  margin: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 100%;
  }
  :hover {
    transform: scale(1.1);
    box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.2);
  }
  .cTxt {
    min-height: 9rem;
  }
`;

const ProjectCard = (props) => {
  return (
    <PCard style={styles.card}>
      <Card.Img
        variant='top'
        alt={props.cTitle + ' image'}
        src={process.env.PUBLIC_URL + `/img/projects/${props.cImg}.png`}
        style={styles.cImg}
      />
      <Card.Body>
        <Card.Title>{props.cTitle}</Card.Title>
        <Card.Text className='cTxt'>{props.cBody}</Card.Text>
        <Container className='d-flex justify-content-between px-5'>
          <Button href={props.RepoL} target='_blank' style={styles.cBtn}>
            Repo
          </Button>
          <Button href={props.LiveL} target='_blank' style={styles.cBtn}>
            Live
          </Button>
        </Container>
      </Card.Body>
    </PCard>
  );
};

const styles = {
  cImg: {
    height: '10rem',
    borderBottom: '1px solid #f00',
  },
  cBtn: {
    backgroundColor: 'red',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
};

export default ProjectCard;
