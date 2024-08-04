import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I'm <span className="purple">Roshini Padmanabha </span>
            residing in <span className="purple"> California, US.</span>
            <br />
            I am a 2nd year Graduate Student pursuing Master's in Information Systems, graduating in May 2025.
          
            <br />
            <br />
            In Summer 2024, I interned as a Data Analytics Intern at ResMed for the Healthcare & Sleep wellness domain space.
            Previously, I worked full-time for<span className="purple"><i> 2 years in Tata Consultancy Services, </i></span> onsite for a Retail domain Hypermarket project.
            <br />
            <br />
            My field of Interest lies in &nbsp;
            <i>
              <span className="purple">Software Development, Database & Warehousing solutions, Data Analytics & Engineering </span> involving DevOps and Cloud based services. 
              {" "}
              <b className="purple">

              </b>
            </i>
            <br />
            <br />
            I have worked as a 
            <ul>
              <li className="about-activity">
                <ImPointRight /> Data Analyst & Data Engineer
              </li>
              <li className="about-activity">
                <ImPointRight /> System Engineer
              </li>
              <li className="about-activity">
                <ImPointRight /> Software Engineer
              </li>


            </ul></p>

          
<br></br>
          <p style={{ textAlign: "justify" , color: "rgb(155 126 172)" }}>
            "Dreams dont work, unless you do!"{" "}
          </p>
          <footer className="blockquote-footer">Roshini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
