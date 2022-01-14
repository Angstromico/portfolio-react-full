import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import AppSalon from '../../Assets/Projects/15.png';
import plugin from '../../Assets/Projects/18.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/portfolio-javascript/master/portjava.png"
              isBlog={false}
              title="My Projects on JavaScript"
              description="See how good I Handle JavaScript"
              link="https://manuel-morales-portfolio-javascript.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/React-Portfolio-Projects/master/logo.png"
              isBlog={false}
              title="My Projects on React"
              description="A Portfolio for My React Projects"
              link="https://manuel-morales-react-projects.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Tema-Para-Instituto-Educativo-en-WordPress/master/screenshot.png"
              isBlog={false}
              title="Tema de WordPress para Institutos Educativos"
              description="A WordPress Theme for Schools."
              link="https://github.com/Angstromico/Tema-Para-Instituto-Educativo-en-WordPress"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/sportcollegewordpresstheme/master/screenshot.png"
              isBlog={false}
              title="A WordPress Theme about Sport Collegue"
              description="Wordpress Sport College Theme"
              link="https://github.com/Angstromico/sportcollegewordpresstheme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppSalon}
              isBlog={false}
              title="Beauty Salon Hypatia"
              description="A simulation of a beauty salon"
              link="https://app-salon-beauty.000webhostapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Angstromico-Porfolio/master/img/introduction.png"
              isBlog={false}
              title="Portfolio HTML5 PHP"
              description="My First Portfolio"
              link="https://manuel-morales-portfolio.bodegones.website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plugin}
              isBlog={false}
              title="QuizBook WordPress Plugin"
              description="A Plugin of WordPress to Put Questionnaires on the Frontend"
              link="https://github.com/Angstromico/QuizBook_WordPress_Plugin"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/PHP-Form.Simulator/master/PHPFormSimulator.png"
              isBlog={false}
              title="PHP Form Simulator"
              description="A Simulator of Form Validator for Send info with PHP"
              link="https://php-form-simulator.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Another-PHP-Form/master/Form-Capture.png"
              isBlog={false}
              title="PHP Form Simulator"
              description="Another Simulator of Form Validator for Send info with PHP"
              link="https://another-php-simulator.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Tema-Para-Instituto-Educativo-en-WordPress/master/screenshot.png"
              isBlog={false}
              title="Model for WordPress Theme with Bootstrap"
              description="Static Page Model for WordPress Theme Made it on Bootstrap"
              link="https://modelo-instituto-educativo-manuel-morales.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/React-Portfolio-Manuel-Morales/master/screenofmypage.png"
              isBlog={false}
              title="Paisano Furniture Website"
              description="A Ecommerce to sell Furniture"
              link="https://paisanofurniture.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
