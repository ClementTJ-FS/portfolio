import React from 'react';
import SkillBlock from './SkillBlock';
import Styled from 'styled-components';

const SkillContainer = Styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 50%;
  align-self: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Skills = (isMobile) => {
  return (
    <section style={styles.container}>
      <h1 style={styles.h1}>Skills</h1>
      <div style={styles.skills}>
        <h2 style={styles.h2}>Front End</h2>
        <SkillContainer>
          <SkillBlock
            skill={'HTML5'}
            skillTitle={'HTML5'}
            ext={'svg'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'CSS3'}
            skillTitle={'CSS3'}
            ext={'svg'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'JS'}
            skillTitle={'JavaScript'}
            ext={'svg'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'REACT'}
            skillTitle={'React.JS'}
            ext={'svg'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'BOOTSTRAP'}
            skillTitle={'Bootstrap'}
            ext={'png'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'MATERIAL'}
            skillTitle={'Material-UI'}
            ext={'svg'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'XD'}
            skillTitle={'Adobe XD'}
            ext={'png'}
            isMobile={isMobile}
          />
        </SkillContainer>
        <h2 style={styles.h2}>Back End</h2>
        <SkillContainer>
          <SkillBlock
            skill={'NODE'}
            skillTitle={'Node.JS'}
            ext={'png'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'EXPRESS'}
            skillTitle={'Express.JS'}
            ext={'png'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'MONGO'}
            skillTitle={'MongoDB'}
            ext={'png'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'MYSQL'}
            skillTitle={'MySQL'}
            ext={'png'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'POSTGRES'}
            skillTitle={'PostgreSQL'}
            ext={'svg'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'SEQUELIZE'}
            skillTitle={'Sequelize'}
            ext={'png'}
            isMobile={isMobile}
          />
          <SkillBlock
            skill={'REST'}
            skillTitle={'REST API'}
            ext={'svg'}
            isMobile={isMobile}
          />
        </SkillContainer>
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    textAlign: 'center',
    fontSize: '3rem',
    margin: '4rem 0',
  },
  h2: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: 'red',
  },
  skills: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Skills;
