import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaPython,
  FaRProject,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLinux,
  FaAws,
  FaSnowflake,
  FaChartLine,
  FaChartBar,
  FaCogs,
  FaCloud,
  FaNetworkWired,
  FaProjectDiagram,
  FaGlobe,
  FaCodeBranch,
  FaSync,
} from "react-icons/fa";
import {
  SiOracle,
  SiDbt,
  SiApachespark,
  SiApachehadoop,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFlask,
  SiDjango,
  SiBootstrap,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiApachekafka,
  SiPowerbi,
  SiTableau,
  SiApacheairflow,
  SiMicrosoftexcel,
  SiMicrosoftazure,
  SiGooglecloud,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { BiTask } from "react-icons/bi";

const iconStyle = { fontSize: "2rem", marginBottom: "0.3rem" };
const labelStyle = { fontSize: "1rem", textAlign: "center" };

function Techstack() {
  return (
    <div>
      <h2>Programming Languages</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaPython style={iconStyle} />
          <p style={labelStyle}>Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaRProject style={iconStyle} />
          <p style={labelStyle}>R</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaDatabase style={iconStyle} />
          <p style={labelStyle}>SQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaHtml5 style={iconStyle} />
          <p style={labelStyle}>HTML</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCss3Alt style={iconStyle} />
          <p style={labelStyle}>CSS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaJs style={iconStyle} />
          <p style={labelStyle}>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaPhp style={iconStyle} />
          <p style={labelStyle}>PHP</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaLinux style={iconStyle} />
          <p style={labelStyle}>Linux</p>
        </Col>
      </Row>

      <h2>Databases & Warehouses</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
        <Col xs={5} md={2} className="tech-icons">
          <SiMysql style={iconStyle} />
          <p style={labelStyle}>MySQL</p>
        </Col>
        <Col xs={5} md={2} className="tech-icons">
          <FaSnowflake style={iconStyle} />
          <p style={labelStyle}>Snowflake</p>
        </Col>
        <Col xs={5} md={2} className="tech-icons">
          <SiOracle style={iconStyle} />
          <p style={labelStyle}>Oracle</p>
        </Col>
        <Col xs={5} md={2} className="tech-icons">
          <SiPostgresql style={iconStyle} />
          <p style={labelStyle}>PostgreSQL</p>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={5} md={2} className="tech-icons">
          <SiMongodb style={iconStyle} />
          <p style={labelStyle}>MongoDB</p>
        </Col>
        <Col xs={5} md={2} className="tech-icons">
          <FaAws style={iconStyle} />
          <p style={labelStyle}>AWS RDS</p>
        </Col>
      </Row>

      <h2>Data & ETL Tools</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftexcel style={iconStyle} />
          <p style={labelStyle}>Excel</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTableau style={iconStyle} />
          <p style={labelStyle}>Tableau</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPowerbi style={iconStyle} />
          <p style={labelStyle}>Power BI</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaAws style={iconStyle} />
          <p style={labelStyle}>AWS S3</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApacheairflow style={iconStyle} />
          <p style={labelStyle}>Apache Airflow</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachekafka style={iconStyle} />
          <p style={labelStyle}>Kafka</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDbt style={iconStyle} />
          <p style={labelStyle}>DBT</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachespark style={iconStyle} />
          <p style={labelStyle}>Apache Spark</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachehadoop style={iconStyle} />
          <p style={labelStyle}>Hadoop</p>
        </Col>
      </Row>

      <h2>Foundations</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaCloud style={iconStyle} />
          <p style={labelStyle}>SaaS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaNetworkWired style={iconStyle} />
          <p style={labelStyle}>Networking</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaProjectDiagram style={iconStyle} />
          <p style={labelStyle}>SDLC</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaGlobe style={iconStyle} />
          <p style={labelStyle}>DNS</p>
        </Col> </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaCodeBranch style={iconStyle} />
          <p style={labelStyle}>Restful API</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaSync style={iconStyle} />
          <p style={labelStyle}>CI/CD</p>
        </Col>
      </Row>


      <h2>Project Management</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiConfluence style={iconStyle} />
          <p style={labelStyle}>Confluence</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira style={iconStyle} />
          <p style={labelStyle}>Jira</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BiTask style={iconStyle} />
          <p style={labelStyle}>Agile</p>
        </Col>
      </Row>



      <h2>Libraries</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
        <Col xs={4} md={3} className="tech-icons">
          <SiNumpy style={iconStyle} />
          <p style={labelStyle}>NumPy</p>
        </Col>
        <Col xs={5} md={3} className="tech-icons">
          <SiPandas style={iconStyle} />
          <p style={labelStyle}>Pandas</p>
        </Col>
        <Col xs={4} md={3} className="tech-icons">
          <FaChartLine style={iconStyle} />
          <p style={labelStyle}>Matplotlib</p>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartBar style={iconStyle} />
          <p style={labelStyle}>Seaborn</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartLine style={iconStyle} />
          <p style={labelStyle}>Plotly</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCogs style={iconStyle} />
          <p style={labelStyle}>Scikit-learn</p>
        </Col>
      </Row>

      <h2>Frameworks</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask style={iconStyle} />
          <p style={labelStyle}>Flask</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango style={iconStyle} />
          <p style={labelStyle}>Django</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow style={iconStyle} />
          <p style={labelStyle}>TensorFlow</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap style={iconStyle} />
          <p style={labelStyle}>Bootstrap</p>
        </Col>
      </Row>
      <h2>Cloud Technologies</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftazure style={iconStyle} />
          <p style={labelStyle}>Azure</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaAws style={iconStyle} />
          <p style={labelStyle}>AWS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecloud style={iconStyle} />
          <p style={labelStyle}>GCP</p>
        </Col>
      </Row>


    </div>
  );
}

export default Techstack;
