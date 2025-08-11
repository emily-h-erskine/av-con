import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BackgroundImage from "./BookTicketsImages/SHAN5640.jfif";
import Flight from "./BookTicketsImages/SHAN6371.jfif";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";
import './register.css';

export default function Register() {
    return (
        <main className="main-container">
            <HeroSection
                defaultTitle="Schools! Colleges! Register Now for AvCon 2025"
                defaultSubtitle="Join us for an unforgettable aviation experience designed especially for students. Secure your school's place today!"
                smallScreenTitle="Register for AvCon 2025"
                smallScreenSubtitle="A unique aviation event tailored for aviation enthusiasts — don't miss out!"
                buttonText="Register for AvCon 2025"
                buttonLink="https://avcon.ie/BookTickets"
            />
            <div className="event-container">
                <Box className="grid-container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className="text-container">
                                <p>
                                    Exciting news! We're coming back — and your school can be among the first to Register for <strong>AvCon: The Future of Aviation 2025!</strong> Don't miss out on the second year of this groundbreaking event — secure your spot today.
                                    <br />
                                    <br />
                                    Whether you're a student, teacher, or school leader, educational institutions from across the globe are invited to be part of this inspiring event. Dive into the future of aviation and explore the innovations, technologies, and ideas that are shaping the skies of tomorrow.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="text-center">
                                <img
                                    src={BackgroundImage}
                                    alt="Behind the Scenes"
                                    className="event-image"
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <h5 className="text-center">
                        <b>
                            Schools Register here:{" "}
                            <a href="https://forms.office.com/r/07XtkSzr47">
                                Click Here
                            </a>
                        </b>
                        <br />
                        <br />
                        <b>
                            College Register here:{" "}
                            <a href="https://forms.office.com/r/xwSzALCh3b">
                                Click Here
                            </a>
                        </b>
                    </h5>
                    <p>
                        AvCon is not open to the public - our limited Afterburner Corporate Access Passes offer you exclusive event entry, valuable networking, and the chance to showcase your brand; every ticket supports the SkyBound Fund, helping keep AvCon free for students, proving that every little helps to inspire the next generation. To secure your pass, email hello@avcon.ie
                        <br/>
                        <br/>
                    </p>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className="text-center">
                                <img
                                    src={Flight}
                                    alt="Behind the Scenes"
                                    className="event-image"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="text-container">
                                <p>
                                    The full event schedule will be announced soon with some truly exciting topics
                                    you won't want to miss! Don't miss this
                                    opportunity to engage with industry leaders
                                    and visionaries in aviation, space, tech and
                                    aerospace! If you have already registered
                                    your school or college to attend the event,
                                    you can register for the rest of your school
                                    to watch the event via our LIVE Stream.
                                    <br />
                                    <br />
                                    <b>
                                        For enquiries please email:{" "}
                                        <a href="mailto:hello@avcon.ie">
                                            hello@avcon.ie
                                        </a>
                                    </b>
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </main>
    );
}
