import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#F96900',
  }, 
  linkColor: {
    color: '#3A5169',
  },
  bgColor: {
    background: 'radial-gradient(closest-side, #FFFFFF, #F96900, #3A5169)'
  },
  marginTop: {
    marginTop: 100
  },
  paddingTop: {
      paddingTop: 100
  },
  paddingBottom: {
    paddingBottom: 150
  },
  paddingLeft: {
    paddingLeft: 20
  },
  paddingRight: {
    paddingRight: 20
  }
}

export default function Home() {
  return (
    <div className="home" style={{...styles.bgColor, ...styles.marginTop, ...styles.paddingTop, ...styles.paddingBottom, ...styles.paddingLeft, ...styles.paddingRight}} id="home">
      <h1 className={"d-flex"} style={{fontSize: "1000%", color: '#3A5169', justifyContent: "center", marginBottom: -50}}>Colin</h1>
      <h1 className={"d-flex"} style={{fontSize: "1000%", color: '#3A5169', justifyContent: "center", marginTop: -50}}>McHale</h1>
      <h2 className={"d-flex"} style={{justifyContent: "center", color: '#FFFFFF', marginTop: -20}}>Full Stack Web Developer</h2>
    </div>
  );
}
