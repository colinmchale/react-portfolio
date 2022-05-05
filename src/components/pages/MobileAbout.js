import React from 'react';
import bioPhoto from './images/IMG_2865.jpg';
import './About.css';

const styles = {
  fontColor: {
    color: '#FFFFFF',
  },
  headerColor: {
    color: '#F96900',
  },
  photoMargin: {
    marginTop: 10,
  },
  photoSize: {
    width: '20rem',
    height: '15rem'
  }
}

export default function About() {
  return (
    <div style={{marginTop: 120}} id="about">
      <h1 style={styles.headerColor}>A little <i>about</i> me...</h1>
    
      <div> 
          
        <div className="m-3">
          <p style={styles.fontColor}>
            I am a 24 year old professional looking to start a career in web development. I graduated from Southern Methodist University in May of 2019 with a B.S. in Economics. Since then I spent time working in Wholesale Property Insurance at Amwins in Dallas, TX. I currently live in Austin, TX.
          </p>
          <div>
            <img src={bioPhoto} alt="Colin McHale" style={{...styles.photoMargin, ...styles.photoSize}} className='rounded-circle svg-shadow shadow-danger shadow-intensity-lg photoGlow'/>
          </div>
          <p style={{color: '#FFFFFF', marginTop: 30}}>Recently earned a certificate from Southern Methodist University in full stack web development, with newly developed skills in HTML, CSS, Javascript, SQL, Handlebars, NoSQL, Node.js, Express.js and React.js. Passionate about designing and building responsive web applications. Innovative problem-solver that welcomes new challenges and understands that they are necessary for growth as a developer. I worked on a team of three to develop a single-page MERN app that acts as a consumer to consumer auction site, helping users track their products and bids. Excited to leverage my skills as part of a fast-paced, quality-driven environment where I can learn and excel with those around me.</p>
        </div>
        
      </div>
    </div>
  );
}
