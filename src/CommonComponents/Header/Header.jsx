import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown.svg";

export const Header = () => {
    const [showEventDropdown, setShowEventDropdown] = useState(false);
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleEventDropdownToggle = () => setShowEventDropdown(!showEventDropdown);
    const handleAboutDropdownToggle = () => setShowAboutDropdown(!showAboutDropdown);
    const handleMobileToggle = () => setShowMobileMenu(!showMobileMenu);
    const closeMobileMenu = () => setShowMobileMenu(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            closeMobileMenu();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const dropdownIconStyle = {
        padding: "0 0 0 10px",
        width: "14px",
        height: "14px",
    };

    const dropdownMenuStyle = {
        position: "absolute",
        zIndex: "1000",
        top: "calc(100% + 10px)",
        left: 0,
        backgroundColor: "var(--background-dark)",
        padding: "10px",
        border: "1px white solid",
        textAlign: "left",
    };

    const navItemStyle = {
        display: "flex",
        alignItems: "center",
        position: "relative",
        whiteSpace: "nowrap",
        minWidth: "max-content",
        marginRight: "var(--margin-small)",
    };

    const linkStyle = {
        whiteSpace: "nowrap",
        minWidth: "max-content",
        marginRight: "2rem",
    };

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

            <div style={{ textAlign: "right" }}>
                {isMobile ? (
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={handleMobileToggle}
                    >
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
                                    overflowY: "scroll",
                                    padding: "1rem 2rem 1rem 0",
                                    backgroundColor: "var(--background-dark-98)",
                                }}
                            >
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
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "4rem",
                                            fontWeight: "100",
                                            padding: "var(--padding-small",
                                            cursor: "pointer",
                                        }}
                                        onClick={handleMobileToggle}
                                    >
                                        &times;
                                    </span>
                                </div>

                                {/* Dropdown Menu for Mobile */}
                                <ul className="dropdown-menu">
                                    <li><a href="./Event">EVENT INFO</a></li>
                                    <li><a href="./EventSchedule">EVENT SCHEDULE</a></li>
                                    <li><a href="./SpeakersPresenters">SPEAKERS &amp; PRESENTERS</a></li>
                                    <li><a href="./FlightSim">AVCON XTRA: THE FLIGHT SIM CHALLENGE</a></li>
                                </ul>

                                <ul>
                                    <li style={{ padding: "1rem 0" }}>
                                        <div>
                                            <li>
                                                <a
                                                    style={{ marginBottom: "6px" }}
                                                    className="uppercase"
                                                    href="./FlightSim"
                                                >
                                                    About AvCon
                                                </a>
                                            </li>
                                            <ul className="dropdown-menu">
                                                <li><a href="./News">NEWS &amp; UPDATES</a></li>
                                                <li><a href="./SponsorsPartners">SPONSORS &amp; PARTNERS</a></li>
                                                <li><a href="./AviationPathwayPortal">AVIATION PATHWAY PORTAL</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                                <ul>
                                    <li style={{ padding: "1rem 0" }}><a href="./Contact">CONTACT US</a></li>
                                    <li style={{ padding: "1rem 0" }}><a href="./ExhibitorRegistration">EXHIBITOR REGISTRATION</a></li>
                                    <li style={{ padding: "1rem 0" }}><a href="./BookTickets">GET TICKETS</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={navItemStyle}
                            onMouseEnter={handleEventDropdownToggle}
                            onMouseLeave={handleEventDropdownToggle}
                        >
                            <a className="link-text" href="./Event">EVENT INFO</a>
                            <img src={Dropdown} alt="Dropdown" className="mr-2" style={dropdownIconStyle} />
                            {showEventDropdown && (
                                <p style={dropdownMenuStyle}>
                                    <a className="uppercase link-text" href="./EventSchedule">EVENT SCHEDULE</a>
                                    <br /><br />
                                    <a className="uppercase link-text" href="./SpeakersPresenters">SPEAKERS &amp; PRESENTERS</a>
                                    <br /><br />
                                    <a className="uppercase link-text" href="./FlightSim">AVCON XTRA: THE FLIGHT SIM CHALLENGE</a>
                                </p>
                            )}
                        </div>

                        <div
                            style={navItemStyle}
                            onMouseEnter={handleAboutDropdownToggle}
                            onMouseLeave={handleAboutDropdownToggle}
                        >
                            <a className="uppercase link-text" href="./About">ABOUT AVCON</a>
                            <img src={Dropdown} alt="Dropdown" className="mr-2" style={dropdownIconStyle} />
                            {showAboutDropdown && (
                                <p style={dropdownMenuStyle}>
                                    <a className="uppercase link-text" href="./News">NEWS &amp; UPDATES</a>
                                    <br /><br />
                                    <a className="uppercase link-text" href="./SponsorsPartners">SPONSORS &amp; PARTNERS</a>
                                    <br /><br />
                                    <a className="uppercase link-text" href="./AviationPathwayPortal">AVIATION PATHWAY PORTAL</a>
                                </p>
                            )}
                        </div>

                        <a className="link-text" style={linkStyle} href="./Contact">CONTACT US</a>
                        <a className="link-text" style={linkStyle} href="./ExhibitorRegistration">EXHIBITOR REGISTRATION</a>
                        <a
                            role="button"
                            className="link-text"
                            style={{ ...linkStyle, padding: "0.75rem", borderRadius: "4px" }}
                            href="./BookTickets"
                        >
                            GET TICKETS
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};