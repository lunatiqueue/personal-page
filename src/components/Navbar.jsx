import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";




export const Navigation = () => {
    return (
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Nav className="me-auto"> {/* Align left */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};