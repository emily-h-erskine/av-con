import React, { useCallback, useState } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react';

const SURVEY_ID = 1;

export default function ContactUsForm() {
  const surveyJson = {
    elements: [
      {
        name: 'FirstName',
        title: 'Enter your first name:',
        type: 'text',
      },
      {
        name: 'LastName',
        title: 'Enter your last name:',
        type: 'text',
      },
      {
        name: 'Email',
        title: 'Enter your email:',
        type: 'text',
      },
      {
        name: 'Message',
        title: 'Enter your message:',
        type: 'text',
      },
    ],
  };

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const saveSurveyResults = (url, json) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(json),
    })
      .then((response) => {
        if (response.ok) {
          setAlertMessage("Success! You're Message Has Been Sent!!");
          setAlertType('success');
        } else {
          console.error('Error:', response);
          setAlertMessage('Oops! Something Went Wrong - Please Try Again');
          setAlertType('error');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setAlertMessage('Oops! Something Went Wrong - Please Try Again');
        setAlertType('error');
      });
  };

  const survey = new Model(surveyJson);
  const surveyComplete = useCallback(
    (sender) => {
      saveSurveyResults(
        `mailto:emilykarate1234@gmail.com`,
        sender.data
      );
    },
    [saveSurveyResults]
  );

  survey.onComplete.add(surveyComplete);

  return (
    <div>
      <Survey.Survey model={survey} />
      {alertMessage && <div className={alertType}>{alertMessage}</div>}
    </div>
  );
}
