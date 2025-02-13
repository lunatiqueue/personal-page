import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../index.css";
import { BsDownload, BsBriefcase, BsMortarboard } from "react-icons/bs";

const Resume = () => {
  return (
    <Container className="content-section text-white py-5">
      <h2 className="text-start mb-5 fw-bold">Resume</h2>
      <Row className="justify-content-center">
        {/* Experience Section - Left Side */}
        <Col md={5} className="d-flex flex-column gap-3">
          <h2 className="fw-bold text-center mb-3">Experience</h2>
          <Card bg="dark" text="light" className="p-3 shadow-sm border-light">
            <Card.Body>
              <BsBriefcase className="fs-2 text-warning mb-2" />
              <h4>Software Development Intern</h4>
              <p className="text-muted">Alexander Kravchuk | Kyiv, Ukraine | Feb 2023 – Apr 2023</p>
              <ul className="small">
                <li>Developed an image gallery web app and user registration form.</li>
                <li>Gained experience with Git for version control.</li>
                <li>Installed and configured the company’s development environment.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card bg="dark" text="light" className="p-3 shadow-sm border-light">
            <Card.Body>
              <BsBriefcase className="fs-2 text-warning mb-2" />
              <h4>Advertising & Typography Assistant</h4>
              <p className="text-muted">Advertising Agency ‘SMART’ | Kyiv, Ukraine | Jun 2021 – Oct 2022</p>
              <ul className="small">
                <li>Managed administrative tasks and document preparation.</li>
                <li>Contributed to the design process for various projects.</li>
                <li>Supported advertising campaigns and conducted market research.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Education Section - Right Side */}
        <Col md={5} className="d-flex flex-column gap-3">
          <h2 className="fw-bold text-center mb-3">Education</h2>
          <Card bg="dark" text="light" className="p-3 shadow-sm border-light">
            <Card.Body>
              <BsMortarboard className="fs-2 text-warning mb-2" />
              <h4>Bachelor’s Degree in IT</h4>
              <p className="text-muted">Cracow University of Technology | 2019 - 2024</p>
              <ul className="small">
                <li>Studied algorithms, data structures, and operating systems.</li>
                <li>Gained skills in programming, cybersecurity, and computer graphics.</li>
                <li>Worked on projects involving software development and data analysis.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card bg="dark" text="light" className="p-3 shadow-sm border-light">
            <Card.Body>
              <BsMortarboard className="fs-2 text-warning mb-2" />
              <h4>Diploma in Web & Interactive Development</h4>
              <p className="text-muted">Assiniboine Community College | 2023 - 2025</p>
              <ul className="small">
                <li>Developing skills in web, mobile, and game development.</li>
                <li>Working on real-world projects with clients.</li>
                <li>Learning emerging technologies like AR, VR, and XR.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Download CV Button at Bottom */}
      <div className="text-center mt-5">
        <Button href="/VadymKochenko_CV.pdf" download variant="warning" className="px-4 py-2 fw-bold">
          <BsDownload className="me-2" /> Download My CV
        </Button>
      </div>
    </Container>
  );
};

export default Resume;