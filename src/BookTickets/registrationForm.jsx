import React, { useRef, useState } from 'react';
import { Alert } from '@mui/material';

export default function RegistrationForm() {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [attendants, setAttendants] = useState('');
  const [schoolBusiness, setSchoolBusiness] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [numStudents, setNumStudents] = useState('');
  const [numBuses, setNumBuses] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'attendants':
        setAttendants(value);
        break;
      case 'schoolBusiness':
        setSchoolBusiness(value);
        break;
      case 'jobPosition':
        setJobPosition(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'website':
        setWebsite(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      case 'numStudents':
        setNumStudents(value);
        break;
      case 'numBuses':
        setNumBuses(value);
        break;
      default:
        break;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      attendants,
      schoolBusiness,
      jobPosition,
      location,
      website,
      contactNumber,
      numStudents,
      numBuses,
    };

    setAlertMessage('Success! You\'ve Been Registered');
    setAlertType('success');
    setFirstName('');
    setLastName('');
    setEmail('');
    setAttendants('');
    setSchoolBusiness('');
    setJobPosition('');
    setLocation('');
    setWebsite('');
    setContactNumber('');
    setNumStudents('');
    setNumBuses('');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="registration-form" style={{ maxWidth: '80%', margin: 'auto' }}>
      <div className="username">
        <label className="form__label" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="form__input"
          type="text"
          value={firstName}
          onChange={(e) => handleInputChange(e)}
          name="firstName"
          id="firstName"
          placeholder="First Name"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="lastname">
        <label className="form__label" htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          className="form__input"
          onChange={(e) => handleInputChange(e)}
          placeholder="Last Name"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="email">
        <label className="form__label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form__input"
          value={email}
          onChange={(e) => handleInputChange(e)}
          name="email"
          placeholder="Email"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="attendants">
        <label className="form__label" htmlFor="attendants">
          Number of People Attending:
        </label>
        <input
          type="number"
          id="attendants"
          className="form__input"
          value={attendants}
          onChange={(e) => handleInputChange(e)}
          name="attendants"
          placeholder="0"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="schoolBusiness">
        <label className="form__label" htmlFor="schoolBusiness">
          School/Business:
        </label>
        <input
          type="text"
          id="schoolBusiness"
          className="form__input"
          value={schoolBusiness}
          onChange={(e) => handleInputChange(e)}
          name="schoolBusiness"
          placeholder="School/Business"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="jobPosition">
        <label className="form__label" htmlFor="jobPosition">
          Job Position:
        </label>
        <input
          type="text"
          id="jobPosition"
          className="form__input"
          value={jobPosition}
          onChange={(e) => handleInputChange(e)}
          name="jobPosition"
          placeholder="Job Position"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="location">
        <label className="form__label" htmlFor="location">
          School/Business Location:
        </label>
        <input
          type="text"
          id="location"
          className="form__input"
          value={location}
          onChange={(e) => handleInputChange(e)}
          name="location"
          placeholder="School/Business Location"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="website">
        <label className="form__label" htmlFor="website">
          Website URL:
        </label>
        <input
          type="url"
          id="website"
          className="form__input"
          value={website}
          onChange={(e) => handleInputChange(e)}
          name="website"
          placeholder="Website URL"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="contactNumber">
        <label className="form__label" htmlFor="contactNumber">
          Contact Number:
        </label>
        <input
          type="telephone"
          id="contactNumber"
          className="form__input"
          value={contactNumber}
          onChange={(e) => handleInputChange(e)}
          name="contactNumber"
          placeholder="Contact Number"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="numStudents">
        <label className="form__label" htmlFor="numStudents">
          Number of Students:
        </label>
        <input
          type="number"
          id="numStudents"
          className="form__input"
          value={numStudents}
          onChange={(e) => handleInputChange(e)}
          name="numStudents"
          placeholder="0"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="numBuses">
        <label className="form__label" htmlFor="numBuses">
          Number of Buses:
        </label>
        <input
          type="number"
          id="numBuses"
          className="form__input"
          value={numBuses}
          onChange={(e) => handleInputChange(e)}
          name="numBuses"
          placeholder="0"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <button
          type="submit"
          name="Submit Registration Button"
          className="submit-button"
          style={{
            padding: '15px',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <b>Submit</b>
        </button>
      </div>
      {alertMessage && (
        <Alert severity={alertType} className="alert-message" style={{ marginTop: '20px' }}>
          {alertMessage}
        </Alert>
      )}
    </form>
  );
}

