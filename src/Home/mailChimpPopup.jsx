import React, { useEffect } from 'react';

export default function MailchimpScript(){
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'mcjs';
    script.async = true;
    script.src = 'https://chimpstatic.com/mcjs-connected/js/users/a77a19dcb5fb86a5293649230/090d26d146e32fe015d0f0ddc.js';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};