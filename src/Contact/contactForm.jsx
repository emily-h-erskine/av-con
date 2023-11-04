import React, { useCallback, useState } from 'react';
import * as Survey from 'survey-react';
import { Model } from 'survey-core';

const SURVEY_ID = 1;

export default function ContactUsForm() {
  const surveyJson = {
    elements: [
      {
        name: 'FirstName',
        title: 'First Name:',
        type: 'text',
      },
      {
        name: 'LastName',
        title: 'Last Name:',
        type: 'text',
      },
      {
        name: 'Email',
        title: 'Email:',
        type: 'text',
      },
      {
        name: 'Message',
        title: 'Message:',
        type: 'text',
      },
    ],
  };

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const saveSurveyResults = (url, json) => {
    fetch('mailto:emilykarate1234@gmail.com', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ surveyData: json }),
    })
      .then((response) => {
        if (response.ok) {
          setAlertMessage("Success! Your message has been sent!");
          setAlertType('success');
        } else {
          console.error('Error:', response);
          setAlertMessage('Oops! Something went wrong - please try again');
          setAlertType('error');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setAlertMessage('Oops! Something went wrong - please try again');
        setAlertType('error');
      });
  };

  const survey = new Model(surveyJson);
  const surveyComplete = useCallback(
    (sender) => {
      const email = 'emilykarate1234@gmail.com';
      const subject = 'Survey Results';
      const body = JSON.stringify(sender.data);
      const mailtoString = `mailto:${email}?subject=${subject}&body=${body}`;
  
      window.location.href = mailtoString;
  
      setAlertMessage("Success! Your Message Sent!!");
      setAlertType('success');
    },
    []
  );

  survey.onComplete.add(surveyComplete);

  return (
    <div>
      <Survey.Survey model={survey} />
      <br/>
      {alertMessage && <div className={alertType}>{alertMessage}</div>}
    </div>
  );
}
