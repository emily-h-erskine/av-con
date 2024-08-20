import React from "react";
import AboutTimeline from "./aboutTimeline.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AVConPromoVideo from "./The Future of aviation.mp4";

export default function About() {
    const aboutAVCon = [
        {
            date: "January 2023",
            event: "Event 1",
            description: "Description for Event 1",
            imageSrc:
                "https://www.atlanticaviation.ie/wp-content/uploads/2023/03/Shane-and-girls-scaled.jpg",
            imageAlt: "Image 1 Alt Text",
        },
        {
            date: "February 2023",
            event: "Event 2",
            description: "Description for Event 2",
            imageSrc:
                "https://www.atlanticaviation.ie/wp-content/uploads/2023/03/Shane-and-girls-scaled.jpg",
            imageAlt: "Image 2 Alt Text",
        },
    ];

    return (
        <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
            <div className="event-container text-center">
                <h3 style={{ textAlign: "center" }}>About AvCon</h3>

                {/* Uncomment this when AboutTimeline is ready */}
                {/* <AboutTimeline aboutAVCon={aboutAVCon} /> */}
            </div>

            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <iframe
                            className="md:w-3/4 lg:w-2/3 xl:w-1/2"
                            height="500"
                            width="100%"
                            src={AVConPromoVideo}
                            title="AvCon Future of Aviation"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <p>
                            Welcome to AvCon - The Future of Aviation! Taking
                            place on November 7th at The Irish Air Corps,
                            Casement Aerodrome, Baldonnel, Co. Dublin, AvCon is
                            thrilled to present its signature event dedicated to
                            all things aviation. Designed to ignite the
                            imaginations of students from primary to tertiary
                            education levels, AvCon offers a dynamic platform to
                            explore career opportunities and delve into the
                            exciting world of flight. Whether you're a curious
                            primary schooler, a discerning secondary school
                            student, especially in Transition Year, or a
                            tertiary education enthusiast, AvCon promises an
                            immersive experience like no other.
                            <br />
                            <br />
                            Dubbed as the Comic Con of Aviation, AvCon brings
                            together aviation enthusiasts, industry experts, and
                            educational institutions to showcase the
                            cutting-edge advancements and endless possibilities
                            within the aviation sector. Join us at AvCon and let
                            your dreams take flight!
                            <br />
                            <br />
                            Please note: AvCon is only facilitating education
                            group bookings at the moment.
                            <br />
                            <br />
                            <a href="/BookTickets">
                                Register through our registration and ticket
                                page.
                            </a>
                            <br />
                            <br />
                            For all other queries please contact us at{" "}
                            <a href="mailto:hello@avcon.ie">hello@avcon.ie</a>
                        </p>
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}
