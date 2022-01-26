import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#BA1200',
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
        <a href="https://docs.google.com/document/d/1avotxOyxeQwgVsX3E6J37fnLdrUUkCO66lvNjmo4-hg/edit#heading=h.y7d3xdxnr44m" target="_blank" rel="noreferrer">Click Here!</a>
      </div>
    </div>
  );
}
