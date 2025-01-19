import React, { useState, useEffect } from "react";
import NavAnim from './NavAnim';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setAspectRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navStyle = {
    position: 'fixed',
    width: '100%',
    height: aspectRatio < 1.9 ? '12vh' : '7vh',
    backgroundColor: 'rgb(33, 32, 32)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2vw',
    boxSizing: 'border-box',
    zIndex: 1
  };

  const navtitleStyle = {
    color: 'white',
    fontSize: '3vh',
    fontFamily: 'normal',
    flexShrink: 0,
    fontWeight: 'bolder'
  };

  const menuStyle = {
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
    gap: '2vw',
    fontFamily: 'serif',
    fontWeight: 'normal',
    alignItems: 'center',
    fontSize: '2vh',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // To remove the underline from links
  };

  return (
    <>
      <div style={navStyle}>
        <div style={navtitleStyle}>kshitij.singhai</div>
        <ul style={menuStyle} className="menu">
          <li><Link to="#about" className="menulist" style={linkStyle}>ABOUT</Link></li>
          <li><Link to="#skills" className="menulist" style={linkStyle}>SKILLS</Link></li>
          <li><Link to="#experience" className="menulist" style={linkStyle}>EXPERIENCE</Link></li>
          <li><Link to="#projects" className="menulist" style={linkStyle}>PROJECTS</Link></li>
          <li><Link to="#publications&certification" className="menulist" style={linkStyle}>PUBLICATIONS & CERTIFICATIONS</Link></li>
          <li><Link to="#contact" className="menulist" style={linkStyle}>CONTACT</Link></li>
        </ul>
      </div>
      <NavAnim />
    </>
  );
};

export default Nav;
