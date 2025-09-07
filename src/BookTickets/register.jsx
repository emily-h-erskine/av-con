import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BackgroundImage from "./BookTicketsImages/SHAN5640.jfif";
import Flight from "./BookTicketsImages/SHAN6371.jfif";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";
import './register.css';

export default function Register() {
    return (
        <main className="main-container">
            <HeroSection
                defaultTitle="Schools & Colleges – Register Now for AvCon 2025!"
                defaultSubtitle="An immersive aviation experience built for the next generation of leaders. Reserve your place today."
                smallScreenTitle="Register for AvCon 2025"
                smallScreenSubtitle="For students, educators, and institutions – don’t miss this aviation event!"
                buttonText="Register for AvCon 2025"
                buttonLink="https://avcon.ie/BookTickets"
            />

            <section className="event-container">
                <Box className="grid-container">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <div className="text-container">
                                <h2>Welcome Schools & Colleges</h2>
                                <p>
                                    We're back for <strong>AvCon: The Future of Aviation 2025</strong>!
                                    <br /><br />
                                    Whether you're a student, educator, or school administrator, this event is tailored to ignite your passion for aviation and aerospace. 
                                    <br /><br />
                                    Explore the future of flight, meet industry leaders, and witness innovation first-hand.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="text-center">
                                <img src={BackgroundImage} alt="AvCon Event" className="event-image" />
                            </div>
                        </Grid>
                    </Grid>
                    <div>
                        <h5>School Registration is Now Closed — But Don't Worry! You can still be part of the excitement — Live Stream Registration is now OPEN! Join us online and experience all the action from wherever you are!</h5>
                    </div>

                    <div className="registration-section">
                        <h3 className="text-center">Register Your Institution</h3>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__WNhaCZUOUVBNTU0MlM2RUVYNlhaVlE1NzU1N01GOS4u&route=shorturl"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Live Stream Registration
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    href="https://forms.office.com/r/xwSzALCh3b"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    College Registration
                                </Button>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="corporate-section">
                        <h3 className="text-center">Corporate Attendees</h3>
                        <p className="text-container">
                            While AvCon is not open to the general public, we offer a limited number of <strong>Afterburner Corporate Access Passes</strong> for business leaders, sponsors, and partners.
                            <br /><br />
                            These passes provide exclusive event access, valuable networking, and branding opportunities – all while supporting the <strong>SkyBound Fund</strong> to keep the event free for students.
                            <br /><br />
                            <b>To secure your pass, email:</b> <a href="mailto:hello@avcon.ie">hello@avcon.ie</a>
                        </p>
                    </div>

                    <Grid container spacing={4} alignItems="center" className="stream-section">
                        <Grid item xs={12} sm={6}>
                            <div className="text-center">
                                <img src={Flight} alt="Flight Experience" className="event-image" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="text-container">
                                <h3>Watch the Live Stream</h3>
                                <p>
                                    If your school or college is already registered, you can still involve more students by registering to access our <strong>Live Stream</strong> of the event.
                                    <br /><br />
                                    Stay tuned for the full schedule – exciting panels, tech showcases, and guest speakers are on the way!
                                    <br /><br />
                                    <b>Questions?</b> Email us at: <a href="mailto:hello@avcon.ie">hello@avcon.ie</a>
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </main>
    );
}
