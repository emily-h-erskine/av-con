import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";
import Speaker from "./speaker";
import AllyGarvey from "./PresenterSpeakerImages2024/Ally.JPG";
import QuestionMark from "./QuestionMark.jpg";

export default function SpeakersPresentors2024() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
                <HeroSection
                defaultTitle="Speakers and Presenters"
                defaultSubtitle="We're thrilled to introduce our dynamic duo of presenters, Ally Garvey and Presenter 2 TBD, who will be your guides through this exhilarating journey."
                smallScreenTitle="Speakers and Presenters"
                smallScreenSubtitle="AvCon presenting an event for all things aviation"
                />
            <br />
            <br />
            <p style={{ padding: "0 5%" }}>
                Get ready to soar into the future of aviation at AvCon 2025!
                We're thrilled to introduce our dynamic duo of presenters, Ally
                Garvey and Karl Bowe, who will be your guides through this
                exhilarating journey. From the warm welcome to riveting
                interviews and captivating talks with esteemed guests from the
                aviation world, Ally and TBD will ensure an unforgettable
                experience. Stay tuned for announcements on our line-up of
                guests and talks that will keep you at the edge of your seat.
                Trust us, you won't want to miss the electrifying show we have
                in store for you.
            </p>
            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                <br />
                <br />
                <hr />
                <br />
            </Box>
            <h5 style={{ textAlign: "center" }}>AvCon Presenters</h5>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{ padding: "5%" }}>
                        <Speaker
                            SpeakerImage={QuestionMark}
                            SpeakerName="TBD"
                            SpeakerBio="TBD"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{ padding: "5%" }}>
                        <Speaker
                            SpeakerImage={AllyGarvey}
                            SpeakerName="Ally Garvey"
                            SpeakerBio="Working within the fashion and media industry for over 15 years, Ally Garvey thrives on delivering the latest showbiz news and the Hottest topics to a wide audience. Ally has worked on live tv for over a number of years now on a range of different broadcasting stations where quick thinking and wide range of conversational skills are a must. 
                Ally's favourite environment to work in is a live audience, she loves to engage with co. presenters and the audience.
                Check out  Ally's instagram page to get a glimpse of the many different events both on screen and off screen she has worked on."
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                <br />
                <hr />
                <br />
            </Box>
            <div style={{ textAlign: "center" }}>
                <h5>AvCon Speakers</h5>
                <Box sx={{ flexGrow: 1 }}> 
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={QuestionMark}
                            SpeakerName="TBD"
                            SpeakerBio="TBD"
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={QuestionMark}
                            SpeakerName="TBD"
                            SpeakerBio="TBD"
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={QuestionMark}
                            SpeakerName="TBD"
                            SpeakerBio="TBD"
                            />
                        </Grid>
                    </Grid>
                </Box>
        </div>
      </main>

    );
}
