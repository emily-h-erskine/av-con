import React from "react";

export default function ContactUsForm() {
    return (
        <div className="contact-form-container" style={{ maxWidth: "100%", overflow: "hidden" }}>
            <iframe
                title="AvCon Contact Form"
                width="640"
                height="480"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__WNhaCZURVY4VU80NzcxRDcxT1lIWklNT1k2QklVVC4u&embed=true"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                msallowfullscreen="true"
            ></iframe>
        </div>
    );
}
