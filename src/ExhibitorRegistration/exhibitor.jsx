import React from "react";
import ExhibitorRegistrationForm from "./exhibitorRegistrationForm";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";

export default function ExhibitorRegistration() {
    return (
        <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
            <HeroSection
                defaultTitle="Register to be an Exhibitor at AvCon"
                defaultSubtitle="AvCon is thrilled to present its signature event dedicated to all things aviation"
                smallScreenTitle="Register to be an Exhibitor at AvCon"
                smallScreenSubtitle="AvCon presenting an event for all things aviation"
            />
            <div className="event-container text-center">
                <b>
                    Sponsor/Exhibitor Sign-Up here:{" "}
                    <a href="https://forms.office.com/r/L0KFq8UwSw">
                        Click Here
                    </a>
                </b>
            </div>
        </main>
    );
}
