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
        <header className="flex-container space-between  align-vertical-middle pt-1 pr-2 pb-1 pl-2">
            <div style={{ display: "flex" }}>
                <a href="/">
                    <img
                        src="./AVConLogoWhiteNoBG.png"
                        alt="AV Con"
                        width={isMobile ? "20%" : "20%"}
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
                            <div
                                style={{
                                    backgroundColor:
                                        "var(--background-dark-98)",
                                    position: "fixed",
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    zIndex: 100,
                                    overflowY: "scroll", // Ensure scroll if content overflows
                                    padding: "2rem", // Provide some padding for spacing
                                }}>
                                <ul className="">
                                    {/* EVENT INFO Link with Dropdown */}
                                    <li style={{ padding: "1rem 0" }}>
                                        <div>
                                            <span>EVENT INFO</span>
                                            <ul
                                                className="dropdown-menu"
                                                style={{
                                                    listStyleType: "none",
                                                    padding: "1rem",
                                                }}>
                                                {/* Add 'X' that closes menu 
                                                - align left to avoid mis-taps*/}

                                                <li>
                                                    <a href="./EventSchedule">
                                                        EVENT SCHEDULE
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./SpeakersPresenters">
                                                        SPEAKERS &amp;
                                                        PRESENTERS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./FlightSim">
                                                        AVCON XTRA: THE FLIGHT
                                                        SIM CHALLENGE
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    {/* ABOUT AVCON Link with Dropdown */}
                                    <li style={{ padding: "1rem 0" }}>
                                        <div>
                                            <span>ABOUT AVCON</span>
                                            <ul
                                                className="dropdown-menu"
                                                style={{
                                                    listStyleType: "none",
                                                    padding: "1rem",
                                                }}>
                                                <li>
                                                    <a href="./News">
                                                        NEWS &amp; UPDATES
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./SponsorsPartners">
                                                        SPONSORS &amp; PARTNERS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="./AviationPathwayPortal">
                                                        AVIATION PATHWAY PORTAL
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    {/* Other Links */}
                                    <li style={{ padding: "1rem 0" }}>
                                        <a href="./Contact">CONTACT US</a>
                                    </li>
                                    <li style={{ padding: "1rem 0" }}>
                                        <a href="./ExhibitorRegistration">
                                            EXHIBITOR REGISTRATION
                                        </a>
                                    </li>
                                    <li style={{ padding: "1rem 0" }}>
                                        <a href="./BookTickets">GET TICKETS</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    // Desktop view logic
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
                                            "var(--background-dark-98",
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
                                            "var(--background-dark-85)",
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
