import React, { useEffect, useState } from 'react';

export default function ExhibitorRegistrationForm() {
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
              formId: 'ac7944b8-efc5-4a72-acc1-c40d66167fea'
            });
          }
        };
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return null;
};