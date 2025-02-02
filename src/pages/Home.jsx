import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
    return (
      <div className="hero-section">
        <Container>
          <div className="hero-content">
            <h1>Vadym Kochenko.</h1>
            <h2>Web Developer</h2>
            <div className="hero-buttons">
              <Link to="/resume">
                <Button variant="outline-light">Resume</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline-light">Projects</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Home;