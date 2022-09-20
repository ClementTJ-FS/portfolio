import React from 'react';

const Skills = () => {
  return (
    <section style={styles.container}>
      <div style={styles.skills}>
        <h1 style={styles.title}>Skills</h1>
        <div style={styles.skillsContainer}>
          <div style={styles.skill}>
            <h3 style={styles.skillTitle}>Front End</h3>
            <ul style={styles.skillList}>
              <li style={styles.skillItem}>HTML</li>
              <li style={styles.skillItem}>CSS</li>
              <li style={styles.skillItem}>JavaScript</li>
              <li style={styles.skillItem}>React</li>
              <li style={styles.skillItem}>Bootstrap</li>
              <li style={styles.skillItem}>Material UI</li>
              <li style={styles.skillItem}>Adobe XD/Prototyping</li>
            </ul>
          </div>
          <div style={styles.skill}>
            <h3 style={styles.skillTitle}>Back End</h3>
            <ul style={styles.skillList}>
              <li style={styles.skillItem}>Node</li>
              <li style={styles.skillItem}>Express</li>
              <li style={styles.skillItem}>MongoDB</li>
              <li style={styles.skillItem}>MySQL</li>
              <li style={styles.skillItem}>PostgreSQL</li>
              <li style={styles.skillItem}>Sequelize</li>
              <li style={styles.skillItem}>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    height: '70rem',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  skills: {
    marginTop: '5rem',
    width: '50%',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  skill: {
    width: '45%',
  },
  skillTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'rgb(255, 0, 0)',
  },
  skillList: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    listStyle: 'none',
  },
  skillItem: {
    marginBottom: '1rem',
    display: 'inline-block',
    margin: '0 1rem',
  },
};

export default Skills;
