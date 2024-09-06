import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ApprenticePhoto from "./HomePageImages/apprentices.jpg";
import "../index.css";

export default function FirstImageAndText() {
    return (
        <Box sx={{ padding: { xs: "0 2%", md: "7.5% 5%" } }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <div>
                        <img
                            src={ApprenticePhoto}
                            alt="Aviation apprentices learning about an aircraft engine"
                            style={{
                                width: "100%",
                                maxWidth: "100%",
                                mixBlendMode: "luminosity",
                            }}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className="flex-container-col space-between px-3">
                        <h3 className="py-3">
                            Soar into the future of aviation at AvCon 2024!
                        </h3>
                        <div className="flex-container-col space-between">
                            <p className="text-right mt-3 mb-1">
                                Calling all primary, secondary, and 3rd level
                                students, to experience an electrifying journey
                                through the skies of innovation.
                            </p>
                            <p className="text-right">
                                <a
                                    href="./BookTickets"
                                    className="link-text underline-text"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Join us
                                </a>{" "}
                                for an exhilarating event where you'll explore
                                cutting-edge technology, witness thrilling
                                demos, and engage with industry experts shaping
                                the future of flight.
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
