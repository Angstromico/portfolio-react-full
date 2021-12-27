import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#b86e00',
    grade3: '#e7f42f',
    grade2: '#f1f42f',
    grade1: '#f5ea84',
    grade0: '#f6fa0f',
  };
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Angstromico"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
