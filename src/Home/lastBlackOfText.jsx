import React from "react";
import { Link } from "react-router-dom";

export default function LastBlockOfText() {
    return (
        <div className="mt-3 mb-3 px-2 md:px-5">
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row", // This will align the content side by side (in columns)
                    justifyContent: "space-between", // Distributes the space evenly
                    gap: "20px", // Adds space between the columns
                    flexWrap: "wrap", // Ensures content wraps on smaller screens
                    padding: "1%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: 2,
                    }}
                >
                    <h4 style={{ textAlign: "center" }}>
                        Don't miss your chance to hear from industry leaders, explore career paths, and discover the future of aviation — all from your screen.
                    </h4>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: 2,
                    }}
                >
                    <h4 className="uppercase mb-1">Become an exhibitor</h4>
                    <div style={{ textAlign: "center" }}>
                        Put your product in front of 8000+ enthusiasts and the current industry experts, and future best and bright of the aviation industry.
                        <br/><br/>
                        <Link to="/ExhibitorRegistration">
                            <b>
                                <span className="uppercase">Join AvCon 2025 as a Sponsor or Exhibitor</span>
                            </b>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
