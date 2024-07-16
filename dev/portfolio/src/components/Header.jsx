import React from 'react';
import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Styled from 'styled-components';
import './Header.css';

const SHeader = Styled.header`
  z-index: 100;

  .active {
    border-bottom: 2px solid #f00;
  }

  a.nav-link {
    height: 100%;
  }



  .nav-item {
    height: 100%;
    color: #FFFFFFBF;
    font-weight: 700;
    font-size: 1.25rem;
    text-decoration: none;
    padding: 0.5rem 0.5rem;

    :hover {
    cursor: pointer;
    color: #f00;
    }
  }
  .nav-item-light {
    height: 100%;
    color: #000000A6;
    text-decoration: none;
    padding: 0.5rem 0.5rem;

    :hover {
    cursor: pointer;
    color: #f00;
    }
  }
    
  #about {
    color: #000000A6;

    :hover {
    cursor: pointer;
    color: #f00;
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    align-self: center;
    position: absolute;
    left: 1rem;
    top: 0;
  }

  #download {
    width: 1.5rem;
    font-size: 1rem;
  }
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
      document
        .querySelectorAll('.nav-item')
        .forEach((item) => item.classList.remove('nav-item-light'));
      let about = document.querySelector('#about');
      if (about) {
        about.removeAttribute('id');
      }
    } else {
      document.querySelector('.navbar').classList.add('mt-5');
      document.querySelector('.navbar').classList.add('bg-transparent');
      document.querySelector('.navbar').classList.remove('bg-dark');
      document.querySelector('.navbar').classList.remove('navbar-dark');
      document.querySelector('.navbar').classList.add('navbar-light');
      document.querySelectorAll('.nav-item').forEach((item) => {
        item.classList.add('nav-item-light');
      });
      // console.log('light', scroll, isMobile);
    }
  }, [scroll, isMobile]);

  // check if mobile
  useEffect(() => {
    if (isMobile) {
      document.querySelector('.navbar').classList.add('justify-content-end');
      document.querySelector('.navbar').classList.add('py-1');
      document.querySelector('.navbar').classList.remove('navbar-transition');
    }
  }, [isMobile]);

  return (
    <SHeader>
      <Container>
        <Navbar
          id='navbar'
          collapseOnSelect
          expand='lg'
          bg='transparent'
          variant='light'
          className='px-3 py-0 mt-5 shadow-sm'
          fixed='top'
        >
          {isMobile && <h1>TJ Clement</h1>}
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='justify-content-center'
          >
            <Nav>
              <Link
                id='about'
                className='nav-item'
                to='about'
                spy={true}
                offset={-400}
              >
                About Me
              </Link>
              <Link className='nav-item' to='skills' spy={true} offset={-570}>
                Skills
              </Link>
              <Link className='nav-item' to='projects' spy={true} offset={-570}>
                Projects
              </Link>
              <Link className='nav-item' to='contact' spy={true} offset={-570}>
                Contact
              </Link>
              <Link
                className='nav-item'
                to='files/ClementTJ_resume.pdf'
                target='_blank'
                download
              >
                Resume <i className='bi bi-download'> </i>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </SHeader>
  );
};

export default Header;
