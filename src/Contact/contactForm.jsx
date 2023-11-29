import React, { useRef, useState } from 'react';
import { Alert } from '@mui/material';

export default function ContactUsForm() {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then(() => {
        setAlert({ message: 'Success You\'ve Been Registered', type: 'success' });
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
        setAlert({ message: 'Ooops Something Went Wrong - Please Try Again', type: 'error' });
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="your-form-class">
      {/* Form fields */}
      <button type="submit" style={{ padding: '10px', width: '100%' }}>
        <b>Submit</b>
      </button>
      {/* Alert */}
      {alert.message && (
        <Alert severity={alert.type} style={{ marginTop: '20px' }}>
          {alert.message}
        </Alert>
      )}
    </form>
  );
}