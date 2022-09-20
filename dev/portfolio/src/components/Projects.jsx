import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section style={styles.container} id='projects'>
      <h1 style={styles.h1}>Projects</h1>
      <div style={styles.cardContainer}>
        <ProjectCard
          cTitle='Test'
          cBody='This is a test body, this will be a description of the project.'
          RepoL='#'
          LiveL='#'
        />
        <ProjectCard
          cTitle='Test'
          cBody='This is a test body, this will be a description of the project.'
          RepoL='#'
          LiveL='#'
        />
        <ProjectCard
          cTitle='Test'
          cBody='This is a test body, this will be a description of the project.'
          RepoL='#'
          LiveL='#'
        />
      </div>
    </section>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    backgroundColor: 'white',
    color: 'black',
    padding: '5rem 0',
    height: '70rem',
  },
  h1: {
    alignSelf: 'center',
  },
  cardContainer: {
    alignSelf: 'center',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
};
export default Projects;
