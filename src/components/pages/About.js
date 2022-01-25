import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#BA1200',
  }
}

export default function About() {
  return (
    <div>
      <h1 style={styles.headerColor}>About Me</h1>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGJ-lbwDzoGIw/profile-displayphoto-shrink_800_800/0/1517540727569?e=1642032000&v=beta&t=cd0BlQ1Ml6bz_SXiS_DIHQNHWaLuqypqh_p2RU4IOKI" alt="Colin McHale"/>
      <p style={styles.fontColor}>
      I am a 24 year old professional looking to start a career in web development. I graduated from Southern Methodist University in May of 2019 with a B.S. in Economics. Since then I spent time working in Wholesale Property Insurance at Amwins in Dallas, TX. I currently live in Austin, TX.
      </p>
    </div>
  );
}
