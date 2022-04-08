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
    background: 'radial-gradient(closest-side, #3A5169, #D93041, #FFFFFF)'
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
    <div className="home" style={{...styles.bgColor, ...styles.marginTop, ...styles.paddingTop, ...styles.paddingBottom, ...styles.paddingLeft, ...styles.paddingRight}}>
      <h1 className={"d-flex"} style={{fontSize: "1000%", color: '#FFFFFF', justifyContent: "center", marginBottom: -50}}>Colin</h1>
      <h1 className={"d-flex"} style={{fontSize: "1000%", color: '#FFFFFF', justifyContent: "center", marginTop: -50}}>McHale</h1>
      <h2 className={"d-flex"} style={{justifyContent: "center", color: '#A0C5F8', marginTop: -20}}>Full Stack Web Developer</h2>
    </div>
  );
}
