import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
  DiHtml5,
  DiMysql,
} from "react-icons/di";

import { SiC, SiExpress, SiThreejs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{cursor: "pointer",}}>
        <SiExpress />
      </Col>
       {/* <Col xs={4} md={2} className="tech-icons">
        <SiThreejs />
      </Col>  */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>  */}
    </Row>
  );
}

export default Techstack;
