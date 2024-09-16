import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ApprenticePhoto from "./HomePageImages/apprentices.jpg";
import "../index.css";

export default function FirstImageAndText() {
    return (
        <Box
            className="mt-3 mb-3"
            sx={{ padding: { xs: "0 2%", md: "0% 5%" } }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img
                        src={ApprenticePhoto}
                        alt="Aviation apprentices learning about an aircraft engine"
                        style={{
                            width: "100%",
                            maxWidth: "100%",
                            mixBlendMode: "luminosity",
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <div className="flex-container-col space-between ml-1 mr-1">
                        <h3 className="mb-2">
                            Soar into the future of aviation at AvCon 2024!
                        </h3>
                        <div className="flex-container-col space-between">
                            <p className="text-left mb-1">
                                Calling all primary, secondary, and 3rd level
                                students, to experience an electrifying journey
                                through the skies of innovation.
                            </p>
                            <p className="text-left">
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
