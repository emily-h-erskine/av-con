import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../index.css";

export default function MiddleBlockOfText() {
    return (
        <Box className="bg-dark pt-3 pb-3">
            <hr />
            <Grid
                className="flex-container align-vertical-middle pt-3 pb-3 pr-3 pl-3"
                container
                spacing={2}>
                <Grid item xs={12} sm={6}>
                    <h5 className="text-light" style={{ textAlign: "center" }}>
                        Exciting news! Even though in-person
                        registration for AvCon - The Future of
                        Aviation is now closed, you don't have to
                        miss out on this groundbreaking event.
                        <br></br><br></br>
                        <a
                            className="text-light text-large text-link"
                            href="./BookTickets">
                            Pre-Register Your School for AvCon 2025
                        </a>
                    </h5>
                </Grid>
                <Grid className="flex-container-col" item xs={12} sm={6}>
                    <div className="flex-col-center">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // Aligns items to the center horizontally
                                alignContent: "center",
                                gap: "10px", // Adds space between items
                            }}
                            className="my-2">
                            <p className="text-light">
                                <b>Location:</b>
                            </p>
                            <p className="text-light text-center">
                                Irish Air Corps, Casement Aerodrome, Baldonnel,
                                County Dublin
                            </p>
                            <button
                                className="btn-tertiary mb-2"
                                name="Get directions Button">
                                <a
                                    className="pt-1 pb-1 pl-2 pr-3 flex-container align-center"
                                    href="https://www.google.com/maps/search/?api=1&query=Irish+Air+Corps,+Casement+Aerodrome,+Baldonnel,+County+Dublin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24"
                                        viewBox="0 96 960 960"
                                        width="24"
                                        style={{
                                            verticalAlign: "middle",
                                            marginRight: "8px",
                                        }}>
                                        <path
                                            fill="#ffffff"
                                            d="M480 872q111-120 165.5-208.5T700 520q0-90-60-150t-150-60q-90 0-150 60t-60 150q0 54 54.5 142.5T480 872Zm0 104q-7 0-14-3t-13-8q-127-137-188-237.5T204 520q0-121 79.5-200.5T480 240q121 0 200.5 79.5T760 520q0 73-61 173.5T512 965q-6 5-13 8t-19 3ZM480 632q34 0 57-23t23-57q0-34-23-57t-57-23q-34 0-57 23t-23 57q0 34 23 57t57 23Z"
                                        />
                                    </svg>
                                    <p className="text-light">Get directions</p>
                                </a>
                            </button>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", // Aligns items to the center horizontally
                                gap: "10px", // Adds space between items
                            }}
                            className="mb-3">
                            <p className="text-light">
                                <b>Date:</b>
                            </p>
                            <p className="text-light">October 2nd 2025</p>
                            <button
                                className="btn-secondary"
                                name="Add to calendar Button">
                                <a
                                    className="pb-1 pt-1 pl-2 pr-3 flex-container"
                                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=AvCon+2025&dates=20251002T090000Z/20251002T170000Z&details=Join+us+at+the+Irish+Air+Corps,+Casement+Aerodrome,+Baldonnel,+County+Dublin&location=Irish+Air+Corps,+Casement+Aerodrome,+Baldonnel,+County+Dublin+for+AvCon+2025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        style={{
                                            verticalAlign: "middle",
                                            marginRight: "8px",
                                        }}>
                                        <path
                                            fill="#041326"
                                            d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
                                        />
                                    </svg>

                                    <p
                                        style={{ color: "var(--text-dark" }}
                                        className="text-dark ">
                                        Add to Google Calendar
                                    </p>
                                </a>
                            </button>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <hr />
        </Box>
    );
}
