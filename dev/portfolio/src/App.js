import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //check if mobile
    window.innerWidth <= 991 ? setIsMobile(true) : setIsMobile(false);
    //check scroll
    if (!isMobile) {
      window.addEventListener(
        'scroll',
        () => {
          setScroll(window.scrollY);
        },
        { passive: true }
      );
    } else if (isMobile) {
      setScroll(0);
    }

    // //cleanup
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [isMobile]);

  return (
    <div className='App'>
      {!isMobile && <h1 style={styles.h1}>TJ Clement</h1>}
      <Header scroll={scroll} isMobile={isMobile} />
      <About />
      <Skills isMobile={isMobile} />
      <Projects />
      <Contact />
    </div>
  );
}

const styles = {
  h1: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '2rem',
  },
};

export default App;
