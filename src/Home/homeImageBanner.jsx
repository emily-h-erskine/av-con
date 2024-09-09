import React from "react";

export default function HomeImageBanner() {
    return (
        <div style={{ position: "relative" }}>
            <img
                src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
                alt="Aeroplanes in a hanger"
                style={{
                    width: "100%",
                    mixBlendMode: "luminosity",
                    display: "block",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    mixBlendMode: "darken",
                    background:
                        "linear-gradient(180deg, #var(--background-dark) 0%, rgba(7, 16, 29, 0) 100%)",
                }}
            />
            <button
                type="button"
                name="Book Tickets Button"
                style={{
                    padding: "1.5% 3%",
                    position: "absolute",
                    right: "10%",
                    top: "65%",
                }}
                className="btn-primary">
                <a
                    href="./BookTickets"
                    className="uppercase"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}>
                    Get Tickets
                </a>
            </button>

            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    width: "80%",
                    fontSize: "5vw",
                    fontWeight: "800",
                    color: "white",
                    textAlign: "center",
                }}>
                Welcome to the Future of Aviation!
            </div>
        </div>
    );
}
