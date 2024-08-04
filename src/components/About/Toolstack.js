import React from "react";
import { Col, Row } from "react-bootstrap";
import { People, EmojiObjects, Handshake } from '@mui/icons-material';
import { MdSearch } from 'react-icons/md';
import { RiBrainFill } from "react-icons/ri";

const iconStyle = { fontSize: "2rem", marginBottom: "0.3rem" };
const labelStyle = { fontSize: "1rem", textAlign: "center" };

function SoftSkills() {
  return (
    <div>
      {/* <h2>Soft Skills</h2> */}
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <People style={iconStyle} />
          <p style={labelStyle}>Teamwork</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <MdSearch style={iconStyle} />
          <p style={labelStyle}>Problem Solving</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <RiBrainFill style={iconStyle} />
          <p style={labelStyle}>Analytical Skills</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <EmojiObjects style={iconStyle} />
          <p style={labelStyle}>Creativity</p>
        </Col>
       {/* <Col xs={4} md={2} className="tech-icons">
          <MdForum style={iconStyle} />
          <p style={labelStyle}>Communication</p>
  </Col> */ }
        <Col xs={4} md={2} className="tech-icons">
          <Handshake style={iconStyle} />
          <p style={labelStyle}>Interpersonal Skills</p>
        </Col>
        
      </Row>
    </div>
  );
}

export default SoftSkills;
