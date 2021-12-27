import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'JavaScript Developer',
          'WordPress Developer',
          'PHP  Developer',
          'React Developer',
          'Open Source Contributor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
