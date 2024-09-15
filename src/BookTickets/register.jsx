import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BackgroundImage from "./SHAN5640.jfif";
import Flight from "./SHAN6371.jfif";

export default function Register() {
    return (
        <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
            <div className="event-container text-center">
                <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                    <h4 style={{ textAlign: "center" }}>
                        AvCon - The Future of Aviation: LIVE on TY Hub!
                    </h4>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                                <p>
                                    Exciting news! Even though in-person
                                    registration for AvCon - The Future of
                                    Aviation is now closed, you don't have to
                                    miss out on this groundbreaking event.
                                    <br />
                                    <br />
                                    Join us virtually for AvCon Talks and live
                                    snippets of the event, streamed directly via
                                    TY Hub LIVE! AvCon Talks and event
                                    highlights will be streamed LIVE on TY Hub!
                                    This is your chance to experience the future
                                    of aviation from wherever you are. Whether
                                    you're a student or educator, schools,
                                    colleges, and educational facilities from
                                    around the globe can register to be part of
                                    this inspiring event. Dive into the future
                                    of aviation and explore innovations,
                                    technologies, and ideas shaping the skies of
                                    tomorrow.
                                    <br />
                                    <br />
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
                            Register here:{" "}
                            <a href="https://streamyard.com/watch/4DN8GWpH2XCr">
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
                                    The full event schedule will be announced on
                                    October 7th with some truly exciting topics
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
