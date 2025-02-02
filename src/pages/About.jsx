import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

const About = () => {
  return (
    <Container className="flex-grow-3 d-flex flex-column justify-content-center align-items-start text-center">
      <h1 className="display-4 fw-light">About Me</h1>
      <p className="lead">I'm Vadym Kochenko, a passionate Web Developer.</p>
      <p className="text-light">I specialize in building interactive, responsive, and high-performance applications. I have experience with modern frameworks like React.</p>
    </Container>
  );
};

export default About;