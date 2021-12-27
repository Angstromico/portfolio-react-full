import React from 'react';
import { Col, Row } from 'react-bootstrap';
//import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiPhp,
  DiMysql,
  DiWordpress,
  DiHtml5,
} from 'react-icons/di';
import { SiCss3, SiJquery, SiSqlite } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="opacity">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p className="opacity">PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="opacity">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p className="opacity">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
        <p className="opacity">WordPress</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p className="opacity">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
        <p className="opacity">JQuery</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="opacity">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <p className="opacity">SQL</p>
      </Col>
    </Row>
  );
}

export default Techstack;
