import React from 'react';
import Styled from 'styled-components';

const SAbout = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50rem;
  color: black;
  margin: 0 auto;

  p {
    font-size: 3rem;
    text-align: center;
    line-height: 1.5;
  }

  h1 {
    font-size: 5rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .about {
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 5rem 0;

    .about {
      width: 95%;
    }
    p {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  `;

const About = () => {
  return (
    <SAbout id='about'>
      <h1>About Me</h1>
      <div className='about'>
        <p>
          Hello, I am <span style={styles.name}>TJ</span>, a web developer who
          has a passion for creating clean, functional websites and
          applications.
        </p>
        <a
          style={styles.social}
          href='https://github.com/ClementTJ-FS'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='https://img.icons8.com/ios-filled/50/000000/github.png'
            alt='github'
            style={styles.icon}
          />
          GitHub
        </a>
      </div>
    </SAbout>
  );
};

const styles = {
  name: {
    color: 'rgb(255, 0, 0)',
    fontWeight: 'bold',
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'red',
  },
  icon: {
    width: '4rem',
    height: '4rem',
    margin: '0 1rem',
  },
};

export default About;
