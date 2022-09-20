import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const styles = {
    test: {
      marginTop: '10rem',
      fontSize: '2rem',
    },
    h1: {
      textAlign: 'center',
      fontSize: '3rem',
      marginBottom: '2rem',
    },
  };

  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //check if mobile
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
    //check scroll
    if (!isMobile) {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    } else if (isMobile) {
      setScroll(0);
    }
  }, [isMobile]);

  return (
    <div className='App'>
      {!isMobile && <h1 style={styles.h1}>TJ Clement</h1>}
      <Header scroll={scroll} isMobile={isMobile} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
