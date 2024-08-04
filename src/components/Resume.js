import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/TextLayer.css";


function Resume() {



    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
                    <h2 textAlign='right' >Professional Resume of <b className="purple"> Roshini Padmanabha</b></h2>
                </Row>

                <Row style={{ justifyContent: "center", alignItems: "center", marginBottom: "40px" }}>
                    <Col md={4} style={{ textAlign: "center" }}>
                        <img
                            src="/Roshini Professional Photo New.jpg"
                            alt="Roshini Padmanabha"
                            className='img-fluid'
                            style={{ borderRadius: "2%", maxHeight:"350px" }}
                        />
                    </Col>

                    <Col md={7} style={{ maxWidth: "600px" }}>
                    <p>
                            Experienced Data Engineer and Analytics professional with expertise in Database Management, Cloud Computing, and Business Intelligence
                        Skilled in optimizing systems and driving insights for SaaS products </p>
                    
                        <p>
                            Enterprise-scale data solutions: ETL pipelines, cloud migrations. <br/>
                            Database management: Snowflake, Oracle, MySQL, AWS services. <br />
                            BI dashboards: Power BI, Excel.<br />
                            Programming: Python, SQL, PL/SQL.<br />
                        </p>
                        <p>

                            Professional Strengths include - 
                            Agile project management and cross-functional collaboration.
                            Complex issue troubleshooting and system enhancement.
                            Combining technical expertise with business acumen.
                        </p>  



                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
                    <Button
                        variant="primary"
                        href="https://drive.google.com/file/d/1kowOLhwfYBLHVUk3wrF5eZr1y0hFYdSD/view?usp=sharing"
                        target="_blank"
                        style={{ maxWidth: "250px", marginRight: "10px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;View Resume
                    </Button>
                    <Button
                        variant="primary"
                        href="/Roshini-Padmanabha-Resume.pdf"
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Resume
                    </Button>
                </Row>

                
            </Container>
        </div>
    );
}

export default Resume;
