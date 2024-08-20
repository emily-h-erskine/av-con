import React from "react";
import ContactUsForm from "./contactForm";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
            <div className="event-container text-center">
                <h3 style={{ textAlign: "center" }}>Contact Us</h3>
                <div className="flex justify-center mb-8">
                    <img
                        src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
                        alt="two grey aeroplanes in a hanger"
                        style={{
                            position: "relative",
                            zIndex: "-1",
                            width: "100%",
                            mixBlendMode: "luminosity",
                        }}
                    />
                </div>
                <div className="flex justify-center">
                    <div className="custom-form-container">
                        <div className="w-1/2 md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
