import React, { useEffect, useState } from "react";
import './register.css';

export default function RegistrationForm() {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        if (!scriptLoaded) {
            const script = document.createElement("script");
            script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
            script.charset = "utf-8";
            document.body.appendChild(script);

            script.onload = () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        region: "eu1",
                        portalId: "144491033",
                        formId: "46e6c0f8-c6ce-415f-93df-2d524ed3f4c3",
                        target: "#registration-form", // Target the specific div by ID
                    });
                    setScriptLoaded(true);
                }
            };

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [scriptLoaded]);

    return <div id="registration-form" className="custom-form-container"></div>;
}
