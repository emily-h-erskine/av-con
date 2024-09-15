import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../CommonComponents/Card/Card";

// import AircorpsImage from "./HomePageImages/AirCorpsImage.jpg";
import StudentsImg from "./HomePageImages/students_and_aerospace.png";
import CuttingEdgeImg from "./HomePageImages/cutting-edge-tech.png";
import HandsOnImg from "./HomePageImages/hands-on.png";
import CareerImg from "./HomePageImages/career.png";
import PilotExpImg from "./HomePageImages/flight-sim.png";
import InspirationImg from "./HomePageImages/be-inspired.png";
import GlobalKnowledgeImg from "./HomePageImages/knowledge.png";
import DesignChallengeImg from "./HomePageImages/design-challenge.png";

import "../index.css";

export default function Highlights() {
    return (
        <Box className="" sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
            <Grid container spacing={0}>
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
            </Grid>
            <hr className="mb-3" />
            <div className="exhibitor-container mb-3 mt-3 ">
                <h3 className="exhibitor-heading mb-2">
                    Connect with the next generation of Aviation Professionals
                </h3>
                <div className="exhibitor-inner-container">
                    <h4 className="large-text uppercase mb-1">
                        Become an exhibitor
                    </h4>

                    <p className="mb-3">
                        Put your product in front of 6000 enthusiasts and the
                        current industry experts, and future best and bright of
                        the aviation industry.
                    </p>
                    <a
                        role="button"
                        className="btn-secondary mt-3"
                        href="./ExhibitorRegistration">
                        <span className="text-dark uppercase">
                            Book my exhibit
                        </span>
                    </a>
                </div>
            </div>
        </Box>
    );
}
