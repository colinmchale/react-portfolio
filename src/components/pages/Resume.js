import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#BA1200',
  }, 
  linkColor: {
    color: '#508AA8',
  }
}

export default function Resume() {
  return (
    <div>
      <h1 style={styles.headerColor}>Resume</h1>
      <div>

        <p style={styles.fontColor}>
          Here is a link to my Resume!
        </p>
        <a href="https://docs.google.com/document/d/1avotxOyxeQwgVsX3E6J37fnLdrUUkCO66lvNjmo4-hg/edit#heading=h.y7d3xdxnr44m" target="_blank" rel="noreferrer" style={styles.linkColor}>Click Here!</a>
      </div>
      <h3 class="mt-3" style={styles.headerColor}>
        Proficiencies
      </h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Handlebars</li>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
