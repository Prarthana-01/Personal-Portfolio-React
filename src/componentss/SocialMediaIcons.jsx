import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div style={styles.iconContainer}>
      <a href="https://github.com/Prarthana-01" target="_blank" rel="noopener noreferrer">
        <FaGithub size={25} style={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/prarthana-ravikumar-a92301261/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={25} style={styles.icon} />
      </a>
      <a href="https://www.instagram.com/prarthhhhh/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={25} style={styles.icon} />
      </a>
    </div>
  );
};

const styles = {
  iconContainer: {
    position: 'fixed',
    top: '30px',
    right: '30px',
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: 'white',
    cursor: 'pointer',
  },
};

export default SocialMediaIcons;
