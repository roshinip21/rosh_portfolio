import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import beach from "../../Assets/IMG_3122.JPG";
import { ImPointRight } from "react-icons/im";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em"  }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body" style={{textAlign:"left"}}>
            Born in Bengaluru, India - The Silicon Valley of India, passionate about using tech & contributing to startups that solve modern problems. 
              I completed my <b className="purple"><i>Bachelor's in Computer Science & Engineering </i> </b> & worked full-time for<b className="purple"><i> 2 years in Tata Consultancy Services.</i></b>
              <br />
              <br /> I am currently pursuing my <i>
                <b className="purple"> Masters in Information Systems  </b></i> at San Diego State University
               to strengthen my knowledge of Developing Backend Systems, managing Data for Analytics and improving Business IT processes.
              
              <br />
              <br />
              My field of Interest lies in &nbsp;
              <i>
                <b className="purple">Database Systems, Data Science, Analytics & Data Engineering involving Cloud services & Project Management. </b>
                {" "}
                <b className="purple">
                
                </b>
              </i> I have worked in the Retail & Healthcare domains, and would love to join organizations with similar interests.
              <br />
              <br />
              In addition I learn by working on projects
              with <i> <b className="purple">
                  {" "}
                  Python Libraries & Frameworks
                </b>
              </i>
              &nbsp; , and
              
              explore trending tools for <i><b className="purple">Software Development and Data science.  <br></br>
                </b> 
              </i><br></br> On a personal note, my interests include: 
              
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Travelling with Friends & Family
                </li>

                <li className="about-activity">
                  <ImPointRight /> Dogs & Cats 
                </li>
                <li className="about-activity">
                  <ImPointRight /> Making new connections!
                </li>
                <li className="about-activity">
                  <ImPointRight /> Creating Content & Vlogs
                </li>


              </ul>
              
            </p>

            
          </Col>
          
          <Col md={4} xs={4} style={{ paddingBottom: 10 }}>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <img src={beach}
                alt="sf pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />

            
          </Col>
          </Row> 
          

        
        <Row>
          <Col md={12} className="home-about-social">
            <h3>Feel free to <span className="purple">Connect On</span></h3>
              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/roshinip21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/roshini-p21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_rosh_ini_p/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
