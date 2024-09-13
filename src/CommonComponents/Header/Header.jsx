import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown.svg";
// import "../../index.css";

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
        <header className="flex-container align-vertical-middle pt-1 pr-2 pb-1 pl-2">
            {/* LOGO */}
            <div>
                <a href="/">
                    <img
                        src="./AVConLogoWhiteNoBG.png"
                        alt="AV Con logo"
                        width={isMobile ? "20%" : "30%"}
                    />
                </a>
            </div>

            <div
                style={{
                    textAlign: "right",
                }}>
                {isMobile ? (
                    <div
                        style={{
                            cursor: "pointer",
                        }}
                        onClick={handleMobileToggle}>
                        ☰
                        {showMobileMenu && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    zIndex: "1000",
                                    overflowY: "scroll", // Ensure scroll if content overflows
                                    padding: "1rem 2rem 1rem 0",
                                    backgroundColor:
                                        "var(--background-dark-98)",
                                }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "100%",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        padding: "0",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "4rem",
                                            fontWeight: "100",
                                            padding: "var(--padding-small",
                                            cursor: "pointer",
                                        }}
                                        onClick={handleMobileToggle}>
                                        &times; {/* Close (X) icon */}
                                    </span>
                                </div>

                                {/* EVENT INFO Link with Dropdown */}
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="" href="./Event">
                                            EVENT INFO
                                        </a>
                                    </li>
                                    <li>
                                        <a className="" href="./EventSchedule">
                                            EVENT SCHEDULE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className=""
                                            href="./SpeakersPresenters">
                                            SPEAKERS &amp; PRESENTERS
                                        </a>
                                    </li>
                                    <li>
                                        <a className="" href="./FlightSim">
                                            AVCON XTRA: THE FLIGHT SIM CHALLENGE
                                        </a>
                                    </li>
                                </ul>

                                {/* ABOUT AVCON Link with Dropdown */}
                                <ul>
                                    <li style={{ padding: "1rem 0" }}>
                                        <div>
                                            <li>
                                                <a
                                                    style={{
                                                        marginBottom: "6px",
                                                    }}
                                                    className="uppercase"
                                                    href="./FlightSim">
                                                    About AvCon
                                                </a>
                                            </li>
                                            <ul className="dropdown-menu">
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
                                </ul>

                                {/* Other Links */}
                                <ul>
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
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                whiteSpace: "nowrap", // Prevent text wrapping
                                minWidth: "max-content", // Ensure min width matches content
                                marginRight: "var(--margin-small",
                            }}
                            onMouseEnter={handleEventDropdownToggle}
                            onMouseLeave={handleEventDropdownToggle}>
                            <div className="nav-link link-text">
                                <a className="link-text" href="./Event">
                                    EVENT INFO
                                </a>
                                <img
                                    src={Dropdown}
                                    alt="Dropdown icon"
                                    style={{
                                        padding: "0 0 0 10px",
                                        width: "14px", // Set the width of the dropdown icon
                                        height: "14px", // Set the height of the dropdown icon
                                    }}
                                />
                            </div>
                            {showEventDropdown && (
                                <p
                                    style={{
                                        position: "absolute", // ensures the dropdown does not affect page layout
                                        zIndex: "1000", // ensures dorpdown appears on top of other page elements
                                        top: "calc(100% + 10px)", // Adds 10px margin above the dropdown
                                        left: 0,
                                        backgroundColor:
                                            "var(--background-dark)",
                                        padding: "10px",
                                        border: "1px white solid",
                                        textAlign: "left",
                                    }}>
                                    <a
                                        className="uppercase link-text"
                                        href="./EventSchedule">
                                        EVENT SCHEDULE
                                    </a>
                                    <br />
                                    <br />
                                    <a
                                        className="uppercase link-text"
                                        href="./SpeakersPresenters">
                                        SPEAKERS &amp; PRESENTERS
                                    </a>
                                    <br />
                                    <br />
                                    <a
                                        className="uppercase link-text"
                                        href="./FlightSim">
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
                                marginRight: "var(--margin-small",
                            }}
                            onMouseEnter={handleAboutDropdownToggle}
                            onMouseLeave={handleAboutDropdownToggle}>
                            <div className="nav-link">
                                <a
                                    className="uppercase link-text "
                                    href="./About">
                                    ABOUT AVCON
                                </a>
                                <img
                                    src={Dropdown}
                                    alt="Dropdown icon"
                                    style={{
                                        padding: "0 0 0 10px",
                                        width: "14px", // Set the width of the icon
                                        height: "14px", // Set the height of the icon
                                    }}
                                />
                            </div>
                            {showAboutDropdown && (
                                <p
                                    style={{
                                        position: "absolute", // ensures the dropdown does not affect page layout
                                        zIndex: "1000", // ensures dorpdown appears on top of other page elements
                                        top: "calc(100% + 10px)", // Adds 10px margin above the dropdown                                        left: 0,
                                        backgroundColor:
                                            "var(--background-dark)",
                                        padding: "10px",
                                        border: "1px white solid",
                                        textAlign: "left",
                                    }}>
                                    <a
                                        className="uppercase link-text "
                                        href="./News">
                                        NEWS &amp; UPDATES
                                    </a>

                                    <br />
                                    <br />
                                    <a
                                        className="uppercase nav-link link-text"
                                        href="./SponsorsPartners">
                                        SPONSORS &amp; PARTNERS
                                    </a>
                                    <br />
                                    <br />
                                    <a
                                        className="uppercase nav-link link-text"
                                        href="./AviationPathwayPortal">
                                        AVIATION PATHWAY PORTAL
                                    </a>
                                </p>
                            )}
                        </div>
                        <a
                            className="uppercase nav-link link-text"
                            style={{
                                whiteSpace: "nowrap",
                                minWidth: "max-content",
                            }}
                            href="./Contact">
                            CONTACT US
                        </a>
                        <a
                            className="uppercase nav-link link-text"
                            style={{
                                whiteSpace: "nowrap",
                                minWidth: "max-content",
                            }}
                            href="./ExhibitorRegistration">
                            EXHIBITOR REGISTRATION
                        </a>
                        <a
                            className="uppercase nav-link link-text"
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
                    </div>
                )}
            </div>
        </header>
    );
};
