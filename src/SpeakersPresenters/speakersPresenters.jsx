import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";
import Speaker from "./speaker";
import AllyGarvey from "./PresenterSpeakerImages2024/Ally.JPG";
import PaulButlerLennox from "./PresenterSpeakerImages/PaulButlerLennox.jpeg";
import IanKiely from "./PresenterSpeakerImages2024/IanKiely.JPG";
import SevenJacobs from "./PresenterSpeakerImages/SevenJacobs.jpg";
import QuestionMark from "./QuestionMark.jpg";

export default function SpeakersPresentors2024() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
                <HeroSection
                defaultTitle="Speakers and Presenters"
                defaultSubtitle="We're thrilled to introduce our dynamic duo of presenters, Ally Garvey and Paul Butler Lennox, who will be your guides through this exhilarating journey."
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
                            SpeakerImage={PaulButlerLennox}
                            SpeakerName="Paul Butler Lennox"
                            SpeakerBio="Paul Butler Lennox is a Dublin-born actor, artist and emerging director of both drama and documentary. He's earned accolades including Best Actor at the DISF Festival and a Best Supporting Actor nomination at the Underground Cinema Awards. Known for standout roles such as Ceaser in Marauders and Jake in The Voice, Paul continues to gain international recognition. His documentary Seven Floors Up received the Axis Assemble Award and was selected for pitching at the Celtic Media Awards 2025.
                            Upcoming work includes playing Oscar in Adam Mann's Coolatin. Paul's lead in A Day Like Today was selected for the Galway Film Fleadh, shown on Aer Lingus flights and aired in Australia—he also co-produced the film. He's developing the mini-series Flares with Mark O'Connor and Patrick Osborne.
                            On screen, Paul has appeared in Hardy Bucks, The Tudors, and Rental Boys, and films like Pebble (BAFTA-nominated) and Halowin, produced by Lars Von Trier. On stage, he has performed at The Project, Smock Alley, The Peacock, and The Samuel Beckett Theatre.
                            With over two decades in voice work, Paul is an accomplished VO artist, director, coach, and podcast producer—having produced 300+ episodes across film, TV, and sport. He has created work for RTE, BBC, Google and Netflix, and directed housing crisis documentaries like The Picturehouse and Cherished Unequally.
                            A scholarship recipient of both the Gaiety School of Acting and John Boorman's Irish Film School, Paul co-founded FNI (WeAreFNI.com) and KINO D, and has secured Screen Ireland funding across multiple projects. He is a regular MC, panellist and speaker at film and football events, a VO director in animation, and a featured guest at industry events such as the One Voice Conference and IADT."
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
            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
            <h5 style={{ textAlign: "center" }}>Fireside Chat Hosts</h5>
            <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{ padding: "5%" }}>
                        <Speaker
                            SpeakerImage={IanKiely}
                            SpeakerName="Ian Kiely"
                            SpeakerBio="Ian Kiely is the Founder of Drone Space Ltd, a Dublin-based consultancy at the forefront of UAV innovation. With deep expertise in Unmanned Traffic Management (UTM), Counter-UAS (C-UAS), aerial surveying, and urban air mobility, Ian leads Drone Space in delivering advanced drone services and regulatory solutions across Europe
                            He is a recognized international moderator and speaker, having hosted flagship events like the Air Taxi World Congress and Airport Drone Protection Summit in London and Paris . Ian also founded and organised Drone & Tech Expo Ireland at the RDS in Dublin (2015-2016), and remains a frequent contributor to industry panels, podcasts, and publications 
                            Ian's background includes winning the European Space Masters competition for satellite navigation and later judging its finals in 2020/21 . He also develops professional drone training with Engineers Ireland, including CPD-accredited courses.
                            Whether moderating high-profile summits or delivering focused technical talks, Ian brings hands-on UAV project experience, regulatory insight, and a vision."
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
                            SpeakerImage={SevenJacobs}
                            SpeakerName="Seven Jacobs"
                            SpeakerBio="Seven Jacobs is a speaker, educator, podcast host, and coach who helps high-performers reclaim clarity, confidence, and calm — so they can lead with purpose and power. His work blends practical tools, emotional intelligence, and deeper questions of what it truly means to lead well. 
                            His podcast, Lost and Searching, explores the inner challenges of leadership and life. His training programs and events for ambitious professionals bring out the lifechanging energy we need to get the greatest results available to us. He also writes weekly on Substack to explore development in life from this perspective.
                            As a TEDx speaker, NLP-trained coach, and previous co-founder of 4 small businesses, Seven brings lived experience to his work. From helping scale companies and communities, to building and leading award-winning accelerator programs. He has worked with global brands like Nike and Meta, supported hundreds of leaders, and built communities ranging from 1,000 to 6,000 members.                            
                            Whether working 1:1, leading workshops, or hosting conversations, Seven’s mission is to help us discover and cultivate our greatest self-leader.
                            He fundamentally believes that conscious leadership, rooted in courageous action, is how we shape a better future — and that joy and discovery are serious tools for transformation."
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
