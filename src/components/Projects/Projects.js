import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid19 from "../../Assets/Projects/covid-19.jpg";
import spotify from "../../Assets/Projects/Spotify.png";
import cancer from "../../Assets/Projects/cancer.jpg";
import linkedin from "../../Assets/Projects/linkedin.jpg";
import aws from "../../Assets/Projects/aws.jpg";
import snowflake from "../../Assets/Projects/snowflake.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import retail from "../../Assets/Projects/retail.jpg";
import uber from "../../Assets/Projects/uber.jpg";
import insurance from "../../Assets/Projects/insurance.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Project Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on till date.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin}
              isBlog={false}
              title="LinkedIn Job Postings Scraper and Profile Extractor using Python"
              description="This project provides a Python script to scrape job postings from LinkedIn and extract profile information. It uses the Selenium and BeautifulSoup libraries for scraping and data extraction, and sends an email with the scraped results in an Excel file format."
              ghLink="https://github.com/roshinip21/LinkedIn-JobPosting-Profile-Scraper"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snowflake}
              isBlog={false}
              title="Snowflake Warehouse & ETL Costing Dashboard"
              description="Developed Power BI Reports to analyze the Warehouse Compute & ETL Costs of Snowflake Usage in AWS Cloud. This dashboard will aid in understanding the product wise costs for customer usage in Snowflake warehouse & relevant analytics services."
              ghLink="https://github.com/roshinip21/Snowflake-ETL-Costing-Dashboards"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Breast Cancer Classification - Data Science Project"
              description="The project focused on classifying breast cancer tumors by applying machine learning models like Logistic Regression, Random Forest, KNN, and XGBoost which were trained & evaluated. The project highlighted the importance of data preprocessing, feature selection, and model evaluation in effectively classifying breast cancer tumors."
              ghLink="https://github.com/roshinip21/Data-Science-BreastCancer-Classification"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWS Cloud Services Project - Lambda Application"
              description="This project aims to deploy a scalable and secure application to analyze User webpage stats, by leveraging AWS services like S3, EC2, DynamoDB, Lambda & Route 53 services. It covers the setup, config, execution, and  tasks performed, emphasizing cloud and information security principles for implementing IaaS, SaaS on AWS."
              ghLink="https://github.com/roshinip21/AWS_Lambda_Web_Application"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="CoviSafe - A Web based Covid-19 User Application"
              description="The CoviSafe Application has features like Covid-19 prediction, vaccine slot booking facility, real-time bed availability of hospitals & doctor appointment scheduling. It was built with a real dataset of patients & tools/languages like Python Flask, JavaScript, API's, Machine Learning techniques, Google Sheets & more. "
              ghLink="https://github.com/roshinip21/Covid-19_Flask_User_Application"
              demoLink="https://docs.google.com/presentation/d/1r4UWxBahBTZlbXkfdVDzsAn-wbC6OhN4hBBgEIJhJ4U/edit?usp=sharing"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retail}
              isBlog={false}
              title="Retail HyperMarket Store DBMS - MySQL & AWS"
              description="The Retail Stores Database Management system is designed to streamline and organize various aspects of retail operations. The collab notebook has Data Modeling, SQL Analytical queries, AWS RDS connection and Dashboard visualizations for the Retail Store Operations and Sales Data."
              ghLink="https://github.com/roshinip21/AWS_Retail_Enterprise_Database"
              demoLink=""
            />
          </Col>



          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="Uber Dataset Analysis and Visualization"
              description="Utilized an Uber dataset containing information on Uber trips. Performed EDA, addressed issues like data inconsistency & missing values and performed data transformations. Employed visualization techniques involving Python Libraries like matplotlib, seaborn, plotly to create visuals, including boxplots, scatterplots & pie charts, to extract meaningful insights."
              ghLink="https://github.com/roshinip21/Uber_Dataset_Data_Cleaning_Data_Visualization"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insurance}
              isBlog={false}
              title="Medical Insurance Prediction Project using R Programming"
              description="This project aims to predict the charges of medical insurance using regression techniques and classify policyholders into different categories based on their demographic and lifestyle attributes."
              ghLink="https://github.com/roshinip21/Medical_Insurance_Analytics_R_Project"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify - A Clone of the popular music streaming platform."
              description="A Responsive Web Application Clone of the popular music streaming platform Spotify. Includes music control features like play,pause, also Tile sections like Top hits, Albums, Artists and Playlists. It is built using technologies like Frontend: HTML,CSS,SCSS,JavaScript, Backend: Python Flask Framework"
              ghLink="https://github.com/roshinip21/Spotify_Playlist_Application"
              demoLink="https://docs.google.com/presentation/d/1LNvqLiNf8oiwsJYoT5uPKGZKNJCefB2nqOC5YAxlJcE/edit?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Application - Built with React Framework"
              description="Personal Portfolio Application built using React framework. It consists of webpages providing information of My Educational, Professsional Work experience, Projects, and more."
              ghLink="https://github.com/roshinip21/Portfolio-Template/tree/master"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
