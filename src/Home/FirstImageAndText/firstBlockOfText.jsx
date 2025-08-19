import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PiletPhoto from "../HomePageImages/_HAN7008.JPG";
import "../../index.css";
import "./FirstImageAndText.css";

export default function FirstImageAndText() {
    return (
        <Box className="mt-3 mb-3 box-padding">
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img
                        src={PiletPhoto}
                        alt="Pilet Photo"
                        className="pilet-photo"
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className="flex-container-col space-between ml-1 mr-1">
                        <h3 className="mb-2">
                            AvCon 2025 - The Future of Aviation Is Landing
                        </h3>
                        <div className="flex-container-col space-between">
                            <p className="text-left mb-1">
                                Where the next generation of talent meets the trailblazers of the skies.
                                <br />
                                Where careers take flight — and the industry connects with its future.
                            </p>
                            <p className="text-left">
                                <a
                                    href="./BookTickets"
                                    className="link-text underline-text"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Join us
                                </a>
                                &nbsp; for Ireland's leading aviation and aerospace careers event, built to engage 15-25-year-olds with real-world pathways in aviation, aerospace, space tech, UAS, simulation, sustainability, air traffic, engineering, and more.
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};
