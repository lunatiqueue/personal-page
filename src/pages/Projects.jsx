import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { BsGlobe, BsGithub } from "react-icons/bs";
import "../index.css";
import tetrisImg from "../tetris.png";
import kuipersImg from "../kuipers.png";
import ucatImg from "../ucat.png";

const projects = [
  {
    title: "Tetris (TypeScript, Tailwind)",
    description: "A modern Tetris game built with TypeScript and Tailwind CSS, featuring responsive controls and smooth animations.",
    image: tetrisImg,
    liveDemo: "https://oleksandrkochenko.github.io/tetris/",
    github: "#",
  },
  {
    title: "Bakery Website",
    description: "A fully responsive for laptop and mobile bakery website, showcasing home-hero page and other basic elements. Also was made a full rebrending for the client.",
    image: kuipersImg,
    liveDemo: "https://assiniboinecreative.media/student/wid/2023/kochenkov/fe_kuipers/",
    github: "#",
  },
  {
    title: "Volunteer Work - UCAT",
    description: "Contributed to UCAT's website, improving accessibility and user experience for community support services.",
    image: ucatImg,
    liveDemo: "https://www.ucat.ca/",
    github: "#",
  }
];

const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleShow = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  return (
    <Container className="content-section text-white py-5">
      <h1 className="text-center mb-3 fw-bold">My Projects</h1>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="project-card shadow-sm border-light rounded overflow-hidden" style={{ background: "rgb(58, 93, 122)", border: "1px solid rgba(255, 255, 255, 0.2)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
              <div className="project-image-wrapper" onClick={() => handleShow(project.image)}>
                <Card.Img variant="top" src={project.image} className="project-image" />
              </div>
              <Card.Body className="text-center">
                <h4 className="text-white">{project.title}</h4>
                <p className="text-light small">{project.description}</p>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-around">
                <Button variant="outline-light" href={project.liveDemo} target="_blank">
                  <BsGlobe className="me-2" /> Live Demo
                </Button>
                <Button variant="outline-light" href={project.github} target="_blank">
                  <BsGithub className="me-2" /> Github
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Image Modal */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="lg">
        <Modal.Body className="p-0">
          <img src={selectedImage} alt="Project" className="img-fluid"/>
        </Modal.Body>
      </Modal>
    </Container>
    );
  };
  
  export default Projects;