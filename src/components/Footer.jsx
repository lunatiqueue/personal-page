import React from "react";
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaUsers } from 'react-icons/fa';
import "../index.css";

export const Footer = () => {
  return (
    <footer className="text-white py-4">
      <Container className="d-flex justify-content-left gap-4">
        <a href="https://www.linkedin.com/in/vadym-kochenko/" target="_blank" rel="noreferrer" className="footer-link">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/lunatiqueue" target="_blank" rel="noreferrer" className="footer-link">
          <FaGithub size={24} />
        </a>
         <a href="mailto:your-email@example.com" className="footer-link">
          <FaEnvelope size={24} />
        </a>
        <a href="https://coderoots.net" target="_blank" rel="noreferrer" className="footer-link">
          <FaUsers size={24} />
        </a>
      </Container>
    </footer>
  );
};