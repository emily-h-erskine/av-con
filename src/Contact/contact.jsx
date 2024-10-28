import React from "react";
import ContactUsForm from "./contactForm";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
            <HeroSection
                defaultTitle="CONTACT US"
                defaultSubtitle="AvCon is thrilled to present its signature event dedicated to all things aviation"
                smallScreenTitle="Contact Us"
                smallScreenSubtitle="AvCon presenting an event for all things aviation"
            />
            <div className="event-container text-center">
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
