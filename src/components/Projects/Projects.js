import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import emotion from "../../Assets/Projects/emotion.png";
import netflix from "../../Assets/Projects/netflix.png";
import cyberpunk from "../../Assets/Projects/cyberpunk.png";
import suicide from "../../Assets/Projects/suicide.png";
import flight from "../../Assets/Projects/flight.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyberpunk}
              isBlog={false}
              title="Three.js"
              description="Built using Three.js, a powerful WebGL-based JavaScript 3D engine. Showcases an interactive 3D scene—likely featuring models, animations, camera controls (e.g., OrbitControls). Includes custom shading or lighting effects, demonstrating command over mesh/material properties and scene composition."
              ghLink="https://github.com/riyaa318/Three.js-Project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Management"
              description="A simple full-stack Flight Management system that allows users to perform basic CRUD operations on flight data. Built with React.js for the frontend and connected to a backend database to manage records like flight number, origin, destination, and time. The project showcases integration of frontend forms with backend APIs and persistent data handling."
              ghLink="https://github.com/riyaa318/Flight-Management-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix-Clone"
              description="A Netflix clone project I made during the start of my learning stage, built using HTML and CSS that replicates the user interface of Netflix, including a homepage, banner, movie thumbnails, and responsive layout for various devices."
              ghLink="https://github.com/riyaa318/Netflix-Clone.git"
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="Built with React.js (frontend) and OpenWeatherMap API for live weather data.Displays current weather, along with hourly & daily forecasts, temperature, humidity, wind speed, and weather icons."
              ghLink="https://github.com/riyaa318/Weather-.git"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
