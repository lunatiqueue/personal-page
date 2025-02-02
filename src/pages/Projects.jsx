import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../index.css";

const projects = [
    {
      title: "Mountain Routes Builder",
      description: "A React app for planning mountain hiking routes.",
      link: "https://github.com/your-github/mountain-routes-builder",
    },
    {
      title: "Finance Tracker",
      description: "A tool for managing income and expenses efficiently.",
      link: "https://github.com/your-github/finance-tracker",
    },
  ];
  
  const Projects = () => {
    return (
      <Container className="content-section">
        <h1>My Projects</h1>
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button variant="outline-dark" href={project.link} target="_blank">
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  };
  
  export default Projects;