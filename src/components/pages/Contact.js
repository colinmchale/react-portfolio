import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#D93041',
  },
  buttonColor: {
    background: '#D93041'
  }
}

function Contact () {

  const [nameInput, setNameInput] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'nameInput') {
      setNameInput(inputValue);
    } else if (inputType === 'emailInput') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (!nameInput) {
      setNameError('This field is required');
    } else {
      setNameError('');
    }

    if (!message) {
      setMessageError('This field is required');
    } else {
      setMessageError('');
    }

    if (!email) {
      setEmailError('This field is required');
    } else {
      setEmailError('');
    }
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    
    if (!nameInput) {
      setNameError('This field is required');
    }
    if (!message) {
      setMessageError('This field is required');
    }
    if (!email) {
      setEmailError('This field is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }


    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setNameInput('');
    setEmail('');
    setMessage('');
    setEmailError('');
    setNameError('');
    setMessageError('');
  };
  return (
    <div>
      <h1 style={styles.headerColor}>How to <i>contact</i> me...</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput" style={styles.fontColor}>Name:</label>
          <input type="name" onChange={handleInputChange} className="form-control" id="nameInput" placeholder="name" style={styles.fontColor}/>
        </div>
        <div className='text-danger'>{nameError}</div>
        <div className="form-group">
          <label htmlFor="emailInput" style={styles.fontColor}>Email Address:</label>
          <input type="email" onChange={handleInputChange} className="form-control" id="emailInput" placeholder="email@example.com" style={styles.fontColor}/>
        </div>
        <div className='text-danger'>{emailError}</div>
        <div className="form-group">
          <label htmlFor="message" style={styles.fontColor}>Message:</label>
          <textarea className="form-control" onChange={handleInputChange} id="messageInput" rows="3" style={styles.fontColor}></textarea>
        </div>
        <div className='text-danger'>{messageError}</div>
        <button type="submit" className="btn text-white mt-2" onClick={handleFormSubmit} style={styles.buttonColor}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;