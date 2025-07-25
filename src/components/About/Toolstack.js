import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
