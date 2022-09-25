import React from 'react';
import Styled from 'styled-components';

const SAbout = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 50rem;
  color: black;
  `;

const About = () => {
  return (
    <SAbout id='about'>
      <div style={styles.aboutMe}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.text}>
          Hello, I am <span style={styles.name}>TJ</span>, a web developer who
          has a passion for creating clean, functional websites and
          applications.
        </p>
      </div>
    </SAbout>
  );
};

const styles = {
  aboutMe: {
    width: '50%',
  },
  title: {
    fontSize: '5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '3rem',
    lineHeight: '4rem',
    textAlign: 'center',
  },
  name: {
    color: 'rgb(255, 0, 0)',
    fontWeight: 'bold',
  },
};

export default About;
