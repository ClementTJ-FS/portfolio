import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section style={styles.container} id='projects'>
      <h1 style={styles.h1}>Projects</h1>
      <p style={styles.note}>
        Please Note: Fight Finder and Quiz App use Heroku for deployment, so it
        might take a few seconds to load initially.
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
          cImg='QA'
          cTitle='Quiz App'
          cBody='Quiz App is a simple web application that offers users custom quizzes to take. It is built with React.JS, PostgreSQL, and Express.JS.'
          RepoL='https://github.com/ClementTJ-FS/WDD442'
          LiveL='https://wdd442-production.up.railway.app'
        />
        <ProjectCard
          cImg='FF'
          cTitle='Fight Finder'
          cBody='Fight Finder is a web application that allows users to search for upcoming fighting events. It is built with React.JS and uses a fully custom API and PostgreSQL database.'
          RepoL='https://github.com/ClementTJ-FS/FightFinder'
          LiveL='https://fightfinder-production.up.railway.app/'
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
    paddingBottom: '5rem',
    minHeight: '50rem',
    zIndex: '1',
  },
  h1: {
    alignSelf: 'center',
    margin: '4rem 0',
    fontSize: '5rem',
    fontWeight: 'bold',
  },
  cardContainer: {
    alignSelf: 'center',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  note: {
    fontSize: '1rem',
    color: 'darkred',
    padding: '0 2rem',
  },
};
export default Projects;
