import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiLinux,
  SiVisualstudiocode,
  SiHeroku,
  SiXampp,
  SiGit,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p className="opacity">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="opacity">VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
        <p className="opacity">Xampp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p className="opacity">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p className="opacity">Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
