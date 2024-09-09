import React from "react";
export default function FlightSimImageBanner() {
    return (
        <div style={{ position: "relative", padding: "0% 2% 5% 2%" }}>
            <img
                src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
                alt="header image"
                style={{
                    position: "relative",
                    zIndex: "-1",
                    width: "100%",
                    mixBlendMode: "luminosity",
                }}
            />
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    mixBlendMode: "darken",
                    background:
                        "linear-gradient(180deg, #var(--background-dark) 0%, rgba(7, 16, 29, 0) 100%)",
                }}
            />

            <div
                style={{
                    width: "80%",
                    height: "auto",
                    left: "5%",
                    top: "1%",
                    position: "absolute",
                    fontSize: "4vw",
                    fontWeight: "800",
                    textAlign: "left",
                    color: "white",
                }}>
                AvCon Xtra promises an unforgettable experience for aviation
                enthusiasts and competitive gamers alike.
            </div>
        </div>
    );
}
