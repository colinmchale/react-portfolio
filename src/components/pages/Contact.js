import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#BA1200',
  },
  buttonColor: {
    background: '#BA1200'
  }
}

export default function Contact() {
  return (
    <div>
      <h1 style={styles.headerColor}>Contact Me</h1>
      <form>
        <div class="form-group">
          <label for="nameInput" style={styles.fontColor}>Name:</label>
          <input type="name" className="form-control" id="nameInput" placeholder="name" style={styles.fontColor}/>
        </div>
        <div class="form-group">
          <label for="emailInput" style={styles.fontColor}>Email Address:</label>
          <input type="email" className="form-control" id="emailInput" placeholder="email@example.com" style={styles.fontColor}/>
        </div>
        <div class="form-group">
          <label for="message" style={styles.fontColor}>Message:</label>
          <textarea className="form-control" id="message" rows="3" style={styles.fontColor}></textarea>
        </div>
        <button type="submit" className="btn text-white mt-2" style={styles.buttonColor}>Submit</button>
      </form>
    </div>
  );
}
