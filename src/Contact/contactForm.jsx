import React, { useEffect } from 'react';

export default function ContactUsForm() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '144491033',
          formId: '27d36a8d-be7a-45cc-aaf0-573deab29e39'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .hs-form {
        background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black */
        color: #ffffff; /* Text color */
        /* Add any other custom styles as needed */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
  
};