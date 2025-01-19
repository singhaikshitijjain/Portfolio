import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    background: 'none', // No background
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap:aspectRatio < 1.9 ? '1vh' : '10vh',
    alignItems: 'center',
    position: 'relative',
    marginTop: '5vh', // Adjusted top margin
  };

  const linkStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '80px', // Larger icon size
    height: '80px', // Larger icon size
    boxShadow: '0 4px 20px rgba(0, 255, 255, 1)', // Further intensified shadow
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const iconStyle = {
    fontSize: '40px', // Larger icons
    color: '#0077b5',
  };

  return (
    <div style={containerStyle}>
      <div style={linksStyle}>
        <a href="https://www.linkedin.com/in/singhai-kshitij-jain-857152259/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaLinkedin style={iconStyle} />
        </a>
        <a href="https://github.com/singhaikshitijjain/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaGithub style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/lemme_be_kshtj/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <FaInstagram style={iconStyle} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
