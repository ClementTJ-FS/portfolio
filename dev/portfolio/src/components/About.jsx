import React from 'react';

const About = () => {
  return (
    <section style={styles.container} id='about'>
      <div style={styles.aboutMe}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.text}>
          Hello, I am <span style={styles.name}>TJ</span>, a web developer who
          has a passion for creating clean, functional websites and
          applications.
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    height: '70rem',
    justifyContent: 'center',
    paddingTop: '5rem',
  },
  aboutMe: {
    width: '50%',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    textAlign: 'center',
  },
  name: {
    color: 'rgb(255, 0, 0)',
  },
};

export default About;
