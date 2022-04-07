import React from 'react';
import bioPhoto from './images/IMG_0048.jpg';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#D93041',
  },
  photoSize: {
    width: '20rem',
    height: '15rem'
  }
}

export default function About() {
  return (
    <div style={{marginTop: 40}}>
      <h1 style={styles.headerColor}>A little <i>about</i> me...</h1>
    
      <div className="d-flex flex-wrap"> 
        <div>
          <p style={styles.fontColor}>
            I am a 24 year old professional looking to start a career in web development. I graduated from Southern Methodist University in May of 2019 with a B.S. in Economics. Since then I spent time working in Wholesale Property Insurance at Amwins in Dallas, TX. I currently live in Austin, TX.
          </p>
        </div>
        <div>
          <img src={bioPhoto} alt="Colin McHale" style={styles.photoSize} className='rounded-circle'/>
        </div> 
      </div>
    </div>
  );
}
