import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import sf from "../../Assets/Sfpic.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "1px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Let's get to know - <strong className="purple">'Who is Roshini'</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={sf} alt="about" className="img-fluid" style={{ maxHeight: "450px" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple"> ~~ Professional Skills & Tools ~~ </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Soft Skills</strong> I possess
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
