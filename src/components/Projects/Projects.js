import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import colores from '../../Assets/Projects/2.png';

import foodApp from '../../Assets/Projects/13.png';

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
              imgPath="https://raw.githubusercontent.com/Angstromico/Tema-Para-Instituto-Educativo-en-WordPress/master/screenshot.png"
              isBlog={false}
              title="Tema de WordPress para Institutos Educativos"
              description="A WordPress Theme for Schools."
              link="https://github.com/Angstromico/Tema-Para-Instituto-Educativo-en-WordPress"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colores}
              isBlog={false}
              title="Cambia Colores"
              description="An application that I made in pure JavaScript following the instructions of the tutorial of projects for beginners by John Smilga, with the particularity that I made it in Spanish and that it uses the rgb format."
              link="https://cambiafondos.netlify.app"
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
              imgPath="https://raw.githubusercontent.com/Angstromico/shoppin-cart-manuel-morales/master/Capture.png"
              isBlog={false}
              title="JavaScript Shopping Car"
              description="A shopping car made it follow the full Web Development Curse from Udemy"
              link="https://shopping-cartmanuelmorales.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/BirtdayApp-React/master/manuel-morales-birtday-app.netlify.app_%20(1).png"
              isBlog={false}
              title="App for Birtdays on React"
              description="A birtday app I made it on Reach js by following the course of coding addict on youtube, I put a form tha allows the user to put himself or whoever he/she want on the app"
              link="https://react-projects-1-birthday-reminder.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://github.com/Angstromico/React.js_app-SitiosTuristicosSudamerica/raw/master/screencapture-reactapp-turismo-sudamerica-netlify-app-2021-09-15-00_19_57.png"
              isBlog={false}
              title="App Turismo Suramericano"
              description="A app made it on React js for tourism in South America"
              link="https://reactapp-turismo-sudamerica.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Simulador-Envia-Correo-Manuel/master/screencapture-simulador-manda-correos-memz-netlify-app-2021-09-15-13_38_54.png"
              isBlog={false}
              title="Simulador de Envio de Formulario en JavaScript"
              description="My JavaScript simulator of sending form"
              link="https://simulador-manda-correos-memz.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/AppReact-MyTeachers/master/appteachers.png"
              isBlog={false}
              title="App Reach js My Teachers"
              description="An app made it to show the people who show me the way"
              link="https://appreact-manuelmorales-my-teachers.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Manuel's Food App"
              description="An app made by following the coding adding React Course about fast food"
              link="https://manuelmoralesfoodreactapp.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Buscador_Automoviles_JavaScript/master/img/catureautos.png"
              isBlog={false}
              title="Buscador de Autos JavaScript"
              description="An app that show cars according the user preference"
              link="https://buscador-automoviles-manuel-morales.netlify.app/"
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
              imgPath="https://raw.githubusercontent.com/Angstromico/React-App-Skills/master/MySkills.png"
              isBlog={false}
              title="My Skills"
              description="An App on React js To Show My Skills"
              link="https://app-manuel-morales-skills.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Dummy-Text-Generator/master/Ipsum.png"
              isBlog={false}
              title="Dummy Text Generator"
              description="An App to Generate Dummy Text"
              link="https://dummy-text-generator-manuel-morales.netlify.app/"
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
              imgPath="https://raw.githubusercontent.com/Angstromico/App-Color-Gradient-React-/master/screencapture-localhost-3000-2021-12-05-19_45_54.png"
              isBlog={false}
              title="App Color Gradient React"
              description="A App thet use a library called Value.js to Create Colors gradients"
              link="https://manuel-morales-color-gradient-app-react.netlify.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/React-Groseries-App/master/groseries.png"
              isBlog={false}
              title="App of Groseries on React.js"
              description="A App to create items on React"
              link="https://manuel-morales-groseries-app-react.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/React-Modal-App/master/screencapture.png"
              isBlog={false}
              title="Modal App React"
              description="App to Show the Modal and the Sidebar Nav with the Power of React"
              link="https://manuel-morales-modal-sidebar-app-react.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/react-header-strive/master/stripe.png"
              isBlog={false}
              title="Stripe App"
              description="An app on React that performes a great header Presentation."
              link="https://manuel-morales-modal-header-stripe-app-react.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/react-shopping-cart/master/cart.png"
              isBlog={false}
              title="React Shopping Cart"
              description="Shopping Cart Made it on React"
              link="https://manuel-morales-react-shopping-cart.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/react-api-drinks/master/drinks.png"
              isBlog={false}
              title="React Cocktails App"
              description="An App on React to search and find Cocktails."
              link="https://manuel-morales-react-drinks-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/React-Ensure-App/master/ensure.png"
              isBlog={false}
              title="React App for Car Insurance"
              description="An App pick a Car Insurance."
              link="https://manuel-morales-ensure-app-react.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Angstromico/Cotizador-Autos-App/master/cotizador.png"
              isBlog={false}
              title="App Cotizador de Automoviles en JavaScript"
              description="App to ensure your Car with JavaScript"
              link="https://manuel-morales-cotizador-autos.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
