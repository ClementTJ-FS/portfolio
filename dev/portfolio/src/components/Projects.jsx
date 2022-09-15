import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section style={styles.container} id='projects'>
      <ProjectCard
        cTitle='Test'
        cBody='This is a test body, this will be a description of the project.'
        RepoL='#'
        LiveL='#'
      />
    </section>
  );
};
const styles = {
  container: {
    height: '90rem',
    backgroundColor: 'white',
    color: 'black',
  },
};
export default Projects;
