import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section style={styles.container} id='projects'>
      <h1 style={styles.h1}>Projects</h1>
      <p style={styles.note}>
        Please Note: Fight Finder uses Heroku for deployment, so it might take a
        few seconds to load initially.
      </p>
      <div style={styles.cardContainer}>
        <ProjectCard
          cImg='GF'
          cTitle='Games Free'
          cBody='Games Free is a web application that lists game giveaways from various websites. It is built with React.JS and uses the GAMERPOWER API to fetch game data.'
          RepoL='https://github.com/ClementTJ-FS/WDD348/tree/main'
          LiveL='https://clementtj-fs.github.io/WDD348/#/'
        />
        <ProjectCard
          cTitle='Test'
          cBody='This is a test body, this will be a description of the project.'
          RepoL='#'
          LiveL='#'
        />
        <ProjectCard
          cImg='FF'
          cTitle='Fight Finder'
          cBody='Fight Finder is a web application that allows users to search for upcoming fighting events. It is built with React.JS and uses a fully custom API and PostgreSQL database.'
          RepoL='https://github.com/ClementTJ-FS/FightFinder'
          LiveL='https://fight-finder.herokuapp.com/'
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
  note: {
    fontSize: '1rem',
    color: 'red',
  },
};
export default Projects;
