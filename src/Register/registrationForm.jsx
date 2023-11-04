import React, { useRef, useState } from 'react';
import { Alert } from '@mui/material';

export default function RegistrationForm() {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

const sendEmail = (e) => {
  e.preventDefault();
  const formData = {
    firstName,
    lastName,
    email,
  };

  fetch('http://localhost:3001/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((data) => {
      setAlertMessage('Success You\'ve Been Registered');
      setAlertType('success');
      setFirstName('');
      setLastName('');
      setEmail('');
    })
    .catch((error) => {
      console.error('Error:', error);
      setAlertMessage('Ooops Something Went Wrong - Please Try Again');
      setAlertType('error');
    });
};

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="username">
        <label className="form__label" htmlFor="firstName">
          First Name:{' '}
        </label>
        <input
          className="form__input"
          type="text"
          value={firstName}
          onChange={(e) => handleInputChange(e)}
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
      </div>
      <div className="lastname">
        <label className="form__label" htmlFor="lastName">
          Last Name:{' '}
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          className="form__input"
          onChange={(e) => handleInputChange(e)}
          placeholder="Last Name"
        />
      </div>
      <div className="email">
        <label className="form__label" htmlFor="email">
          Email:{' '}
        </label>
        <input
          type="email"
          id="email"
          className="form__input"
          value={email}
          onChange={(e) => handleInputChange(e)}
          name="email"
          placeholder="Email"
        />
      </div>
      <div>
        <button
          type="submit"
          name="Submit Registration Button"
          onSubmit={sendEmail}
          style={{
            padding: '20px 50px',
            position: 'absolute',
            right: '10%',
            top: '60%',
          }}
        >
          <b>Register</b>
        </button>
      </div>
      {alertMessage && (
        <Alert severity={alertType} style={{ marginTop: '20px' }}>
          {alertMessage}
        </Alert>
      )}
    </form>
  );
}