import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

const Resume = () => {
  return (
    <Container className="content-section">
      <h1>Resume</h1>
      <p>Download my CV: <a href="/VadymKochenko_CV.pdf" download>Click here</a></p>
      <h2>Experience</h2>
      <p>Software Developer at XYZ Company</p>
      <h2>Education</h2>
      <p>Bachelor’s Degree in Computer Science - Cracow University of Technology</p>
    </Container>
  );
};

export default Resume;