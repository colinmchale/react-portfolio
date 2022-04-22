import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  fontColor: {
    color: '#A0C5F8',
  },
  headerColor: {
    color: '#F96900',
  },
  buttonColor: {
    background: '#F96900'
  },
  margin: {
    margin: 10
  }
}

function Contact () {

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, subject, message } = e.target.elements;
    let content = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/react-portfolio", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json;charset=utf-8"
      },
      body: JSON.stringify(content)
    });
    setStatus("Submit");
    let result = await response.json();
  }
 

  return (
    <div style={{marginTop: 30, marginBottom: 20}} id="contact">
      <h1 style={styles.headerColor}>How to <i>contact</i> me...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="name" style={styles.fontColor}>Name:</label>
          <input type="text" className="form-control" id="name" placeholder="name" style={styles.fontColor}/>
        </div>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="email" style={styles.fontColor}>Email Address:</label>
          <input type="email" className="form-control" id="email" placeholder="email@example.com" style={styles.fontColor}/>
        </div>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="subject" style={styles.fontColor}>Subject (optional):</label>
          <input type="text" className="form-control" id="subject" placeholder="subject" style={styles.fontColor}/>
        </div>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="message" style={styles.fontColor}>Message:</label>
          <textarea className="form-control" id="message" rows="3" style={styles.fontColor}></textarea>
        </div>
        <button type="submit" className="btn text-white mt-2" style={{...styles.buttonColor, ...styles.margin}}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;