import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown.svg";

export const Header = () => {
    const [showEventDropdown, setShowEventDropdown] = useState(false);
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleEventDropdownToggle = () => {
        setShowEventDropdown(!showEventDropdown);
    };

    const handleAboutDropdownToggle = () => {
        setShowAboutDropdown(!showAboutDropdown);
    };

    const handleMobileToggle = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            closeMobileMenu();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="flex-container space-between align-center pt-1 pb-1 mb-5">
            <div style={{ display: "flex" }}>
                <a href="/">
                    <img
                        src="./AVConLogoWhite.png"
                        alt="AV Con"
                        width={isMobile ? "20%" : "30%"}
                    />
                </a>
            </div>
            <div
                style={{
                    textAlign: "right",
                    padding: isMobile ? "15% 0 0 0" : "0 0 0 0",
                }}>
                {isMobile ? (
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={handleMobileToggle}>
                        ☰
                        {showMobileMenu && (
                            <p
                                style={{
                                    backgroundColor: "#07101D",
                                    position: "fixed",
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    zIndex: 100,
                                }}>
                                <ul style={{ listStyleType: "none" }}>
                                    {/* Links inside the menu */}
                                    <li style={{ padding: "2% 10%" }}>
                                        <a href="./Event">EVENT INFO</a>
                                    </li>
                                    <li style={{ padding: "2% 10%" }}>
                                        <a href="./EventSchedule">
                                            EVENT SCHEDULE
                                        </a>
                                    </li>
                                    <li style={{ padding: "2% 10%" }}>
                                        <a href="./SpeakersPresenters">
                                            SPEAKERS &amp; PRESENTERS
                                        </a>
                                    </li>
                                    {/* Add remaining links here */}
                                </ul>
                            </p>
                        )}
                    </div>
                ) : (
                    <h6
                        style={{
                            display: "flex", // Change from grid to flex
                            gap: "4%", // Space between nav items
                            justifyContent: "flex-end", // Align nav items to the right
                            textAlign: "center",
                            alignItems: "center", // Vertically center nav items
                        }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                whiteSpace: "nowrap", // Prevent text wrapping
                                minWidth: "max-content", // Ensure min width matches content
                            }}
                            onMouseEnter={handleEventDropdownToggle}
                            onMouseLeave={handleEventDropdownToggle}>
                            <a href="./Event">EVENT INFO</a>
                            <img
                                src={Dropdown}
                                alt="Dropdown"
                                style={{
                                    padding: "0 0 0 10px",
                                    width: "14px", // Set the width of the dropdown icon
                                    height: "14px", // Set the height of the dropdown icon
                                }}
                            />
                            {showEventDropdown && (
                                <p
                                    style={{
                                        position: "absolute", // ensures the dropdown does not affect page layout
                                        zIndex: "100", // ensures dorpdown appears on top of other page elements
                                        top: "100%",
                                        left: 0,
                                        backgroundColor:
                                            "var(--background-dark",
                                        padding: "10px",
                                        border: "1px white solid",
                                        textAlign: "left",
                                    }}>
                                    <a
                                        className="uppercase"
                                        href="./EventSchedule">
                                        EVENT SCHEDULE
                                    </a>
                                    <br />
                                    <br />
                                    <a
                                        className="uppercase"
                                        href="./SpeakersPresenters">
                                        SPEAKERS &amp; PRESENTERS
                                    </a>
                                    <br />
                                    <br />
                                    <a className="uppercase" href="./FlightSim">
                                        AVCON XTRA: THE FLIGHT SIM CHALLENGE
                                    </a>
                                </p>
                            )}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                whiteSpace: "nowrap", // Prevent text wrapping
                                minWidth: "max-content", // Ensure min width matches content
                            }}
                            onMouseEnter={handleAboutDropdownToggle}
                            onMouseLeave={handleAboutDropdownToggle}>
                            <a className="uppercase" href="./About">
                                ABOUT AVCON
                            </a>
                            <img
                                src={Dropdown}
                                alt="Dropdown"
                                style={{
                                    padding: "0 0 0 10px",
                                    width: "14px", // Set the width of the icon
                                    height: "14px", // Set the height of the icon
                                }}
                            />
                            {showAboutDropdown && (
                                <p
                                    style={{
                                        position: "absolute", // ensures the dropdown does not affect page layout
                                        zIndex: "1000", // ensures dorpdown appears on top of other page elements
                                        top: "100%",
                                        left: 0,
                                        backgroundColor:
                                            "var(--background-dark-75)",
                                        padding: "10px",
                                        border: "1px white solid",
                                        textAlign: "left",
                                    }}>
                                    <a className="uppercase" href="./News">
                                        NEWS &amp; UPDATES
                                    </a>
                                    <br />
                                    <br />
                                    <a
                                        className="uppercase"
                                        href="./SponsorsPartners">
                                        SPONSORS &amp; PARTNERS
                                    </a>
                                    <br />
                                    <br />
                                    <a
                                        className="uppercase"
                                        href="./AviationPathwayPortal">
                                        AVIATION PATHWAY PORTAL
                                    </a>
                                </p>
                            )}
                        </div>
                        <a
                            style={{
                                whiteSpace: "nowrap",
                                minWidth: "max-content",
                            }}
                            href="./Contact">
                            CONTACT US
                        </a>
                        <a
                            style={{
                                whiteSpace: "nowrap",
                                minWidth: "max-content",
                            }}
                            href="./ExhibitorRegistration">
                            EXHIBITOR REGISTRATION
                        </a>
                        <a
                            role="button"
                            style={{
                                padding: "0.75rem",
                                // border: "1px solid var(--background-light",
                                borderRadius: "4px",
                                whiteSpace: "nowrap",
                                minWidth: "max-content",
                            }}
                            href="./BookTickets">
                            GET TICKETS
                        </a>
                    </h6>
                )}
            </div>
        </header>
    );
};
