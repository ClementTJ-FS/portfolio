import React from 'react';
import { Figure } from 'react-bootstrap';
import Styled from 'styled-components';

const Sfigure = Styled(Figure)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  margin: 1rem;
  @media (max-width: 768px) {
    width: 8rem;
  }
`;

const SkillBlock = (props) => {
  return (
    <Sfigure>
      <Figure.Image
        width={props.isMobile ? '70px' : '100px'}
        height={props.isMobile ? '70px' : '100px'}
        alt={props.skill}
        src={process.env.PUBLIC_URL + `/img/logos/${props.skill}.${props.ext}`}
        style={styles.sImg}
      />
      <Figure.Caption style={styles.skillTitle}>
        {props.skillTitle}
      </Figure.Caption>
    </Sfigure>
  );
};

const styles = {
  sFigure: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '10rem',
  },
  skillTitle: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
};

export default SkillBlock;
