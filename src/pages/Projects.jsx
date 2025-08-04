import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { BsGlobe, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../index.css";
import tetrisImg from "../tetris.png";
import kuipersImg from "../kuipers.png";
import ucatImg from "../ucat.png";
import multicookImg from "../multicook.png";
import wildernessImg from "../wilderness.png";
import coderootsImg from "../coderoots.png";

const projects = [
  { title: "DecORDecks", description: "Exterior design shop website.", image: wildernessImg, liveDemo: "https://decordecks.ca", github: "https://github.com/lunatiqueue/Wilderness"},
  { title: "Multicook Brandon", description: "SEO optimized landing page.", image: multicookImg, liveDemo: "https://www.multicookbrandon.ca/" },
  { title: "Tetris Game", description: "TypeScript, React, Tailwind game.", image: tetrisImg, liveDemo: "https://tetris-typescript-taupe.vercel.app/", github: "https://github.com/lunatiqueue/tetris-typescript" },
  { title: "Kuipers Website", description: "Responsive bakery website.", image: kuipersImg, liveDemo: "https://assiniboinecreative.media/student/wid/2023/kochenkov/fe_kuipers/"},
  { title: "CodeRoots Platform", description: "Community platform with modern tech.", image: coderootsImg, liveDemo: "https://coderoots.net/"},
  { title: "Tryzub Web Page", description: "Ukrainian-Canadian Association website.", image: ucatImg, liveDemo: "https://www.ucat.ca/" },
  // { title: "TODO Windows App", description: "Hiking trails app with animations.", image: tetrisImg, liveDemo: "#", github: "#" },
  // { title: "Minutee Web App", description: "Hiking trailsanimations.", image: tetrisImg, liveDemo: "#", github: "#" },
];

const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  const handleShow = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Container className="content-section text-white py-5">
      <h1 className="text-center mb-4 fw-bold">My Projects</h1>
      <Row className="justify-content-center align-items-center position-relative overflow-hidden">
        <Button 
          onClick={prevSlide} 
          variant="outline-light" 
          className="carousel-control left-control"
          style={{ position: "absolute", width: "auto" }}
        >
          <BsChevronLeft size={30} />
        </Button>
        
        <div className="d-flex justify-content-center w-100 slider-wrapper">
          <div className="slider" style={{ transform: `translateX(-${startIndex * 33.33}%)`, transition: "transform 0.5s ease-in-out", display: "flex" }}>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="d-flex justify-content-center mb-4" style={{ flex: "0 0 33.33%" }}>
                <Card className="project-card shadow-lg border-light rounded" style={{ width: "100%", maxWidth: "400px", background: "rgb(36, 39, 41)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                  <div className="project-image-wrapper" onClick={() => handleShow(project.image)}>
                    <Card.Img variant="top" src={project.image} className="project-image" style={{ height: "250px", objectFit: "cover" }} />
                  </div>
                  <Card.Body>
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
          </div>
        </div>
        
        <Button 
          onClick={nextSlide} 
          variant="outline-light" 
          className="carousel-control right-control"
          style={{ position: "absolute", width: "auto" }}
        >
          <BsChevronRight size={30} />
        </Button>
      </Row>

      <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="lg">
        <Modal.Body className="p-0">
          <img src={selectedImage} alt="Project" className="img-fluid" />
        </Modal.Body>
      </Modal>

      <style>{`
        .carousel-control {
          z-index: 10;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 5px;
        }
        .left-control { left: 5px; }
        .right-control { right: 5px; }
        .slider-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .slider {
          display: flex;
        }
      `}</style>
    </Container>
  );
};

export default Projects;
