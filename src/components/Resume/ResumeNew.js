import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Riya_Gupta_RJIT.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row
          style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}
        >
          {/* Show/Hide Toggle - LEFT */}
          <Col md={2} className="text-start">
            <Button
              variant={showResume ? "danger" : "success"}
              onClick={() => setShowResume(!showResume)}
              style={{ width: "100%" }}
            >
              {showResume ? "Hide Resume" : "Show Resume"}
            </Button>
          </Col>

          {/* Download CV - RIGHT */}
          <Col md={2} className="text-end">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ width: "100%" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        {/* PDF Display */}
        {showResume && (
          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default ResumeNew;
