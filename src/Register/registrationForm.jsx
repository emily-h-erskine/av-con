import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Alert } from '@mui/material';

export default function RegistrationForm() {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

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
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        <Alert>Success You've Been Registered</Alert>
      })
      .catch((error) => {
        console.log(error.text);
        <Alert>Ooops Something Went Wrong - Please Try Again</Alert>
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
    </form>
  );
};