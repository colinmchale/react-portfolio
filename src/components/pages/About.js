import React from "react";
import bioPhoto from "./images/IMG_2865.jpg";
import "./About.css";

const styles = {
  fontColor: {
    color: "#FFFFFF",
  },
  headerColor: {
    color: "#F96900",
  },
  photoSize: {
    width: "20rem",
    height: "15rem",
  },
};

export default function About() {
  return (
    <div style={{ marginTop: 120 }} id="about">
      <h1 style={styles.headerColor}>
        A little <i>about</i> me...
      </h1>

      <div className="d-flex">
        <div className="m-3">
          <p style={styles.fontColor}>
            I am a 24 year old professional looking to start a career in web
            development. After graduating from Southern Methodist University in
            May of 2019 with a B.S. in Economics, I spent time working in
            Wholesale Property Insurance at AmWINS in Dallas, TX. I currently
            live in Austin, TX where I study and improve on my ability to code
            in a multitude of programming languages.
          </p>
          <p style={styles.fontColor}>
            I recently earned a certificate from Southern Methodist University
            in full stack web development, with newly developed skills in HTML,
            CSS, Javascript, SQL, Handlebars, NoSQL, Node.js, Express.js and
            React.js. I am passionate about designing and executing applications
            that give users the best possible experience. I recently worked in a
            team of three developing a MERN app that acts as a
            consumer-to-consumer auction site, helping users monitor their products and
            bids. I'm excited to leverage my skills as part of a fast-paced,
            quality-driven environment where I can learn and excel with those
            around me.
          </p>
        </div>
        <div>
          <img
            src={bioPhoto}
            alt="Colin McHale"
            style={styles.photoSize}
            className="rounded-circle svg-shadow shadow-danger shadow-intensity-lg photoGlow"
          />
        </div>
      </div>
    </div>
  );
}
