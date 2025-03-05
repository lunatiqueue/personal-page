import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaLock, FaPalette, FaCode } from "react-icons/fa";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "../index.css";

const About = () => {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center align-items-start">
        {/* About Me Section */}
        <Col md={5} className="mb-4">
          <h2 className="fw-bold mb-4 text-white">About Me</h2>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: "20px", lineHeight: "1.8", fontWeight: "300" }}>
            I’m a <span className="fw-bold">Frontend & Full-Stack Developer</span> and <span className="fw-bold">Software Engineer</span> passionate about building
            <span className="text-warning"> modern, high-performance web applications</span>. I specialize in <span className="fw-bold">web development, UI/UX design,</span> and <span className="fw-bold">software engineering</span>, always focusing on <span className="text-warning">performance, security,</span> and <span className="text-warning">accessibility</span>. 
          </p>
          <p style={{ fontFamily: "Lato, sans-serif", fontSize: "20px", lineHeight: "1.8", fontWeight: "300" }}>
            Currently pursuing a <span className="fw-bold">Diploma in Web & Interactive Development</span> at <span className="text-warning">Assiniboine Community College</span>, I’m diving into <span className="fw-bold">e-commerce development</span> and real-world client projects. I also hold a <span className="fw-bold">Bachelor’s Degree in IT</span> from <span className="text-warning">Cracow University of Technology</span>, gaining knowledge in <span className="fw-bold">programming, cybersecurity,</span> and <span className="fw-bold">networking</span>.
          </p>
        </Col>

        {/* Skills Section */}
        <Col md={6} className="mb-4">
          <h3 className="text-center fw-bold mb-4">Tech Stack & Skills</h3>
          <Row className="g-4">
            {[ 
              { name: "React.js / Redux", icon: <FaReact size={40} color="#61DAFB" /> },
              { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
              { name: "SQL / MongoDB", icon: <FaDatabase size={40} color="#FFA500" /> },
              { name: "Web Security", icon: <FaLock size={40} color="#FF0000" /> },
              { name: "Web Design", icon: <FaPalette size={40} color="#FF69B4" /> },
              { name: "TypeScript", icon: <FaCode size={40} color="#007ACC" /> },
            ].map((skill, index) => (
              <Col xs={6} md={4} key={index} className="text-center">
                <div className="p-3 bg-dark rounded shadow-sm">
                  {skill.icon}
                  <p className="m-0">{skill.name}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="bg-dark pt-1 pb-3 px-3 mt-3 rounded shadow-sm">
          {[
            { name: "Time Management", value: 80 },
            { name: "Adaptability", value: 85 },
            { name: "Collaboration", value: 95 },
            { name: "Creativity and Problem-Solving", value: 85 },
          ].map((skill, index) => (
            <div key={index} className="mt-3">
              <h5 className="mb-2">{skill.name}</h5>
              <ProgressBar now={skill.value} label={`${skill.value}%`} variant="success" animated />
            </div>
          ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
