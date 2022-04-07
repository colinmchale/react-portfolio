import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#D93041',
  }, 
  linkColor: {
    color: '#3A5169',
  },
  bgColor: {
      background: '#D93041'
  },
  paddingTop: {
      paddingTop: 100
  }
}

export default function Home() {
  return (
    <div style={{...styles.bgColor, ...styles.paddingTop}}>
      <h1>Colin McHale</h1>
      <h3>Full Stack Web Developer</h3>
    </div>
  );
}
