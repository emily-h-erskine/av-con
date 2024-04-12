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
  
    return null;
};