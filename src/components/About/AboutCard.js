import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Riya Gupta </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />
            I enjoy solving real-world problems through clean, efficient code and building intuitive user experiences.
            <br />
           Currently, I’m looking forward to contributing to impactful web projects and continuously growing as a developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading mysterious stories
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that truly matters."{" "}
          </p>
          <footer className="blockquote-footer">Riya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
