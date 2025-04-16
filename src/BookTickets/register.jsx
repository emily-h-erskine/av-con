import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BackgroundImage from "./SHAN5640.jfif";
import Flight from "./SHAN6371.jfif";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";

export default function Register() {
    return (
        <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
            <HeroSection
                defaultTitle="Schools! Pre-Register Now for AvCon 2025"
                defaultSubtitle="Join us for an unforgettable aviation experience designed especially for students. Secure your school's place today!"
                smallScreenTitle="Pre-Register Your School for AvCon 2025"
                smallScreenSubtitle="A unique aviation event tailored for schools — don't miss out!"
                buttonText="Pre-Register Your School for AvCon 2025"
                buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__WNhaCZURUg1NktIQVBGTThPMUlSWE4xSDdQWDZMWi4u"
            />
            <div className="event-container text-center">
                <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <p>
                                Exciting news! We're coming back — and your school can be among the first to pre-register for <strong>AvCon: The Future of Aviation 2025!</strong> Don't miss out on the second year of this groundbreaking event — secure your spot today.
                                <br />
                                <br />
                                Whether you're a student, teacher, or school leader, educational institutions from across the globe are invited to be part of this inspiring event. Dive into the future of aviation and explore the innovations, technologies, and ideas that are shaping the skies of tomorrow.
                            </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={BackgroundImage}
                                    alt="Behind the Scenes"
                                    style={{
                                        width: "100%",
                                        maxWidth: "100%",
                                        mixBlendMode: "luminosity",
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <h5 style={{ textAlign: "center" }}>
                        <b>
                            Schools Pre-Register here:{" "}
                            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__WNhaCZURUg1NktIQVBGTThPMUlSWE4xSDdQWDZMWi4u">
                                Click Here
                            </a>
                        </b>
                    </h5>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={Flight}
                                    alt="Behind the Scenes"
                                    style={{
                                        width: "100%",
                                        maxWidth: "100%",
                                        mixBlendMode: "luminosity",
                                    }}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
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
