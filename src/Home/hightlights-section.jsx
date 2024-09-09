import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../CommonComponents/Card/Card";

// import AircorpsImage from "./HomePageImages/AirCorpsImage.jpg";
import StudentsImg from "./HomePageImages/students_and_aerospace.png";
import CuttingEdgeImg from "./HomePageImages/cutting-edge-tech.png";
import HandsOnImg from "./HomePageImages/hands-on.png";
import CareerImg from "./HomePageImages/fin-career.png";
import PilotExpImg from "./HomePageImages/flight-sim.png";
import InspirationImg from "./HomePageImages/be-inspired.png";
import GlobalKnowledgeImg from "./HomePageImages/knowledge.png";
import DesignChallengeImg from "./HomePageImages/design-challenge.png";

import "../index.css";

export default function Highlights() {
    return (
        <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
            <Grid container spacing={2}>
                <Grid>
                    <ul className="card-container">
                        <Card
                            imageSrc={StudentsImg}
                            heading="Students and Aerospace"
                            description="AvCon 2024: A thrilling journey into the future of aviation, aerospace, space & STEM for students."
                        />
                        <Card
                            imageSrc={CuttingEdgeImg}
                            heading="Cutting-edge Tech"
                            description="Explore the wonders of aviation, from basics to cutting-edge technology."
                        />
                        <Card
                            imageSrc={HandsOnImg}
                            heading="Hands-on Learning"
                            description="Hands-on learning for primary and secondary students on flight principles and aerodynamics."
                        />
                        <Card
                            imageSrc={CareerImg}
                            heading="Find a Career"
                            description="Career pathways for TY, LCA, LCVP, LC and tertiary students, connecting with industry professionals."
                        />
                        <Card
                            imageSrc={InspirationImg}
                            heading="Be Inspired"
                            description="Inspirational speakers discussing the future of air travel, space exploration, and sustainable aviation."
                        />
                        <Card
                            imageSrc={PilotExpImg}
                            heading="The Pilot Experience"
                            description="Flight simulators and virtual reality experiences for an immersive pilot experience."
                        />
                        <Card
                            imageSrc={GlobalKnowledgeImg}
                            heading="Global Knowledge"
                            description="Global perspectives on aviation's role in connecting the world and addressing environmental challenges."
                        />
                        <Card
                            imageSrc={DesignChallengeImg}
                            heading="Design Challenges"
                            description="Unleash creativity with aviation-themed workshops, design challenges, and competitions."
                        />
                    </ul>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <div style={{ textAlign: "center" }}>
                        <img
                            src={AircorpsImage}
                            alt="Air Corps Hellicopter"
                            style={{
                                width: "100%",
                                maxWidth: "100%",
                                mixBlendMode: "luminosity",
                            }}
                        />
                    </div>
                </Grid> */}
            </Grid>
            <hr />
            <div style={{ padding: "0 5%" }}>
                <h6>Exhibitor Inquiries:</h6>
                <p>
                    If you are interested in showcasing your products or
                    services at AvCon:{" "}
                    <u>
                        <a href="./ExhibitorRegistration">click here</a>
                    </u>
                </p>
            </div>
        </Box>
    );
}
