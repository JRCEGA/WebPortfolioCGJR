import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import the icons you need

const SocialMedia: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <a
        href="https://www.linkedin.com/in/jrcega"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/JRCEGA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.instagram.com/robertocebrerosg/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialMedia;
