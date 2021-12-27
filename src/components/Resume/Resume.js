import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import axios from 'axios';
import pdf from '../../Assets/CV.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
function Resume() {
  const uri = 'https://porfolio-backend.vercel.app/ranks/getRanks';
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);
  console.log(sem, cgpa);
  console.clear();
  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="WordPress Administration of Market Place"
              date="January 2021 - September 2021"
              content={[
                'Worked on the development of an E-commerce website',
                'Integración of Woocommerce on the Website',
                ' Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.',
                'Used Back-End APIs to display data using the Custom Components, library Components, and Redux.',
                'Use of Knowledge in PHP.',
                'Application of Plugins and Themes oriented to Gutenberg and Elementor.',
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer"
              content={[
                'Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery.',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Web Developer on Udemy"
              date="2018 - Present"
              content={[
                `Full Web Development with HTML5, CSS3, JS AJAX PHP and MySQL`,
                `Modern JavaScript Ultimate Guide`,
                `Professional Development of WordPress Themes and Plugins`,
                `React Tutorial and Projects Course `,
                `PHP 8 and MYSQL: The Complete, Practical and From Scratch Course! `,
              ]}
            />

            <h3 className="resume-title">University Degree</h3>
            <Resumecontent
              title=""
              content={[
                'Superior Technician in Materials Science and Engineering',
              ]}
            />

            <h3 className="resume-title">Work experience</h3>
            <Resumecontent
              title=""
              content={[
                `Administrator of the Bodegones Website marketplace ${spojRank}`,
                `Quality Analyst at Dibraplast  ${hackerrank}`,
                'Production Operator at Goyplast',
                'Professor of mathematics, physics, and chemistry at university.',
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
