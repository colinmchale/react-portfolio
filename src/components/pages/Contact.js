import React, { useState } from "react";
import { send } from "emailjs-com";
// import { validateEmail } from '../../utils/helpers';

const styles = {
  fontColor: {
    color: "#A0C5F8",
  },
  headerColor: {
    color: "#F96900",
  },
  buttonColor: {
    background: "#F96900",
  },
  margin: {
    margin: 10,
  },
};

function Contact() {
  var submitAlert = document.querySelector("#submitAlert");

  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    submitAlert.innerHTML = "Sending...";
    send("service_agshbbu", "template_vfyg85n", toSend, "4kDZ4Sa2audbfUzY4")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        submitAlert.innerHTML = "Message Sent!";
        setToSend({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        submitAlert.innerHTML = "Failed to Send";
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginTop: 30, marginBottom: 20 }} id="contact">
      <h1 style={styles.headerColor}>
        How to <i>contact</i> me...
      </h1>
      <form onSubmit={sendEmail}>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="name" style={styles.fontColor}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={toSend.name}
            onChange={handleChange}
            style={styles.fontColor}
          />
        </div>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="email" style={styles.fontColor}>
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={toSend.email}
            onChange={handleChange}
            style={styles.fontColor}
          />
        </div>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="subject" style={styles.fontColor}>
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            className="form-control"
            value={toSend.subject}
            onChange={handleChange}
            style={styles.fontColor}
          />
        </div>
        <div className="form-group" style={styles.margin}>
          <label htmlFor="message" style={styles.fontColor}>
            Message:
          </label>
          <textarea
            className="form-control"
            name="message"
            value={toSend.message}
            onChange={handleChange}
            rows="3"
            style={styles.fontColor}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn text-white mt-2"
          style={{ ...styles.buttonColor, ...styles.margin }}
        >
          Submit
        </button>
        <span id="submitAlert" style={styles.headerColor}></span>
      </form>
    </div>
  );
}

export default Contact;
