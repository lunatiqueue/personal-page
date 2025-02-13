import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaLock, FaPalette, FaCode } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";


const About = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-start">
        <Col md={10} lg={6}>
          <h2 className="text-start fw-bold">About Me</h2>
          <p className="text-start" style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
            I’m a <strong>Frontend & Full-Stack Developer</strong> and <strong>Software Engineer</strong> who enjoys crafting 
            <strong> modern, high-performance web applications</strong>. My expertise covers <strong>web development, UI/UX design, 
            and software engineering</strong>, with a strong focus on <strong>performance, security, and accessibility</strong>. 
            I build <strong>websites, web apps, interactive UI components, and even 3D models</strong>, ensuring they are visually appealing, 
            functional, and optimized for users.
          </p>
          <p className="text-start" style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", lineHeight: "1.6" }}>
            Currently, I’m studying <strong>Web & Interactive Development</strong> at <strong>Assiniboine Community College</strong>, 
            gaining knowledge in <strong>e-commerce development</strong> through projects with <strong>real clients and hands-on practice</strong>. 
            I also hold a <strong>Bachelor’s Degree in IT</strong> from <strong>Cracow University of Technologies</strong>, where I studied 
            <strong>programming, cybersecurity, and networking</strong>.
          </p>

          <h3 className="mt-4 text-center">Tech Stack & Skills</h3>
          <Row className="text-center mt-3">
            <Col xs={6} md={4}>
              <FaReact size={40} color="#61DAFB" />
              <p>React.js / Redux</p>
            </Col>
            <Col xs={6} md={4}>
              <FaNodeJs size={40} color="#3C873A" />
              <p>Node.js</p>
            </Col>
            <Col xs={6} md={4}>
              <FaDatabase size={40} color="#FFA500" />
              <p>SQL / MongoDB</p>
            </Col>
            <Col xs={6} md={4}>
              <FaLock size={40} color="#FF0000" />
              <p>Web Security</p>
            </Col>
            <Col xs={6} md={4}>
              <FaPalette size={40} color="#FF69B4" />
              <p>Web & Graphic Design</p>
            </Col>
            <Col xs={6} md={4}>
              <FaCode size={40} color="#007ACC" />
              <p>TypeScript</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;