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
                <div className="flex justify-center">
                    <div className="custom-form-container">
                        <div className=" md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <ExhibitorRegistrationForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
