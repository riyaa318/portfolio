import React from "react";
import educationBg from "../../Assets/education.png";
import Particle from "../Particle";

function Education() {
  const boxStyle = {
    border: "2px solid #3d026eff",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "30px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 4px 20px rgba(168, 85, 247, 0.2)",
    color: "white",
    fontSize: "16px",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const containerStyle = {
    paddingTop: "100px",
    minHeight: "100vh",
    backgroundColor: "#150f1cff",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // important for responsiveness
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
  };

  return (
    <>
      <Particle />
      <div style={containerStyle}>
        {/* Left Side Content */}
        <div>
          <h1 style={{ color: "#a855f7", marginBottom: "30px", textAlign: "center" }}>
            My Education
          </h1>

          <div style={boxStyle}>
            <strong>🎓 B.Tech (ECE) </strong><br />
            Rustamji Institute of Technology<br />
            2022 – 2026
          </div>

          <div style={boxStyle}>
            <strong>📘 12th Standard</strong><br />
            Sanskar Public School (CBSE)<br />
            2021 – 2022
          </div>

          <div style={boxStyle}>
            <strong>📕 10th Standard</strong><br />
            Sanskar Public School (CBSE)<br />
            2019 – 2020
          </div>
        </div>

        {/* Right Side Image */}
        <img src={educationBg} alt="Education" style={imageStyle} />
      </div>
    </>
  );
}

export default Education;
