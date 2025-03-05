import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsDownload, BsBriefcase, BsMortarboard } from "react-icons/bs";
import "../index.css";
import myCV from "../Vadym_Kochenko_t_resume.pdf";

const Resume = () => {
  return (
    <Container className="text-white pt-5 d-flex flex-column justify-content-center align-items-center">
      <Row className="w-100 max-w-75">
        {/* Experience Section */}
        <Col md={6} className="mb-4">
          <Card className="bg-dark text-white border-light mb-3 shadow-sm rounded card-hover">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <BsBriefcase className="fs-2 text-warning me-3" />
                <h4 className="mb-0">Full Stack Developer | Freelance</h4>
              </div>
              <p className="text-white small">September 2023 - Current</p>
              <ul className="small">
                <li>Full-cycle developing of applications, web-sites and landing pages</li>
                <li>Servers and databases setup, maintenance and operations</li>
                <li>Projects deployment, SEO optimization, consultation on online business representation</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="bg-dark text-white border-light mb-3 shadow-sm rounded card-hover">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <BsBriefcase className="fs-2 text-warning me-3" />
                <h4 className="mb-0">Software Development Intern | Alexander Kravchuk</h4>
              </div>
              <p className="textwhite small">February 2023 - April 2023 | Kyiv, Ukraine</p>
              <ul className="small">
                <li>Developed an image gallery web app using React and Node.js</li>
                <li>Using Git for version control and collaborating with the team</li>
                <li>Setting up the company’s development environment: Server, Domain, SSL, DNS, Users & Roles, MariaDB, NginX</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Education Section */}
        <Col md={6} className="mb-4">
          <Card className="bg-dark text-white border-light mb-3 shadow-sm rounded card-hover">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <BsMortarboard className="fs-2 text-warning me-3" />
                <h4 className="mb-0">Diploma in Web & Interactive Development</h4>
              </div>
              <p className="text-white small">Assiniboine Community College | September 2023 - 2025</p>
              <ul className="small">
                <li>Developing skills in project management, communication, and web, mobile, and game development</li>
                <li>Providing creative solutions to clients, culminating in a Capstone project</li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="bg-dark text-white border-light mb-3 shadow-sm rounded card-hover">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <BsMortarboard className="fs-2 text-warning me-3" />
                <h4 className="mb-0">Bachelor’s Degree in Informational Technologies</h4>
              </div>
              <p className="text-white small">Cracow University of Technology | October 2019 - 2024</p>
              <ul className="small">
                <li>Gained knowledge in algorithms, data structures, operating systems, and AI</li>
                <li>Developed skills in programming languages, cybersecurity, computer graphics, and networking</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button href={myCV} download="Vadym_Kochenko_CV.pdf" variant="warning" className="fw-bold px-4 py-2">
        <BsDownload className="me-2" /> Download My CV
      </Button>

      <style jsx>{`
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
    </Container>
  );
};

export default Resume;