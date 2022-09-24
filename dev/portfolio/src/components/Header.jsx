import React from 'react';
import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Styled from 'styled-components';
import './Header.css';

const Sname = Styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  align-self: center;
  position: absolute;
  left: 1rem;
`;

const Header = ({ scroll, isMobile }) => {
  //scroll effect
  useEffect(() => {
    if (scroll > 50 || isMobile) {
      document.querySelector('.navbar').classList.remove('mt-5');
      //transition effect
      document.querySelector('.navbar').classList.add('navbar-transition');
      document.querySelector('.navbar').classList.remove('bg-transparent');
      document.querySelector('.navbar').classList.remove('navbar-light');
      document.querySelector('.navbar').classList.add('bg-dark');
      document.querySelector('.navbar').classList.add('navbar-dark');
    } else if (scroll < 50) {
      document.querySelector('.navbar').classList.add('mt-5');
      document.querySelector('.navbar').classList.add('bg-transparent');
      document.querySelector('.navbar').classList.remove('bg-dark');
      document.querySelector('.navbar').classList.remove('navbar-dark');
      document.querySelector('.navbar').classList.add('navbar-light');
    }
  }, [scroll, isMobile]);

  // check if mobile
  useEffect(() => {
    if (isMobile) {
      document.querySelector('.navbar').classList.add('justify-content-end');
      document.querySelector('.navbar').classList.remove('navbar-transition');
    }
  }, [isMobile]);

  return (
    <header style={styles.container}>
      <Container>
        <Navbar
          id='navbar'
          collapseOnSelect
          expand='lg'
          bg='transparent'
          variant='light'
          className='px-3 mt-5 shadow'
          fixed='top'
        >
          {isMobile && <Sname>TJ Clement</Sname>}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-center'
          >
            <Nav>
              <Nav.Link href='#about'>About Me</Nav.Link>
              <Nav.Link href='#skills'>Skills</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
              <Nav.Link href='resume.pdf' target='_blank' download>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

const styles = {
  container: {
    zIndex: '100',
  },
};

export default Header;
