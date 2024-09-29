import React from "react";
import Grid from "@mui/material/Grid";

import Sponsor from "./sponsor";
import Partner from "./partner";

import theBigIdeaLogo from "./SponsorImages/theBigIdeaLogo.png";
import wayneDennerLogo from "./SponsorImages/wayneDennerLogo.png";
import shannonAviationLogo from "./SponsorImages/Shannon-Aviation-Museum-Logo 1.png";
import aviationSkillnetLogo from "./SponsorImages/aviationSkillneLogo.png";
import avtrainLogo from "./SponsorImages/avtrainLogo.png";
import mannaLogo from "./SponsorImages/manna-logo 1.png";
import shannonAirportGroupLogo from "./SponsorImages/shannonAirportGroupLogo.png";
import facLogo from "./SponsorImages/fac-logo.png";
import AirCorpLogo from "./SponsorImages/AirCorpsLogo.jpeg";
import forHireLogo from "./SponsorImages/forHireLogo.png";
import ODohertysLogo from "./SponsorImages/ODohertysLogo.jpg";
import hireUpLogo from "./SponsorImages/hireUpLogo.png";
import iaaLogo from "./SponsorImages/iaaLogo.png";
import avconLogo from "./SponsorImages/avconLogo.png";
import TYHubLogo from "./SponsorImages/TYHubLogo.jpg";
import fwiaLogo from "./SponsorImages/fwia-logo-transparent (1).png";
import eawcLogo from "./SponsorImages/eawcLogo.png";
import droneSpaceLogo from "./SponsorImages/droneSpaceLogo.png";
import eirSpace from "./SponsorImages/eirSpaceLogo.png";
import easaLogo from "./SponsorImages/easaLogo.png";
import augmentAeroLogo from "./SponsorImages/augmentAeroLogo (1).png";
import aftaLogo from "./SponsorImages/aftaLogo.png";
import aviationIrelandLogo from "./SponsorImages/aviationIrelandChallengeLogo.png";
import logistycsLogo from "./SponsorImages/logistycsLogo.png";
import rionnIomparLogo from "./SponsorImages/roinnIompairLogo 1.png";
import headingImg from "./SponsorImages/heading_image-transparent.png";

export default function SponsorsPartners() {
    return (
        <main className="flex-col">
            <div className="heading-container">
                <img
                    src={headingImg}
                    className="heading-img"
                    alt="a handshake between partners"
                />
                <h3 className="h3-with-image">Our Sponsors and Partners</h3>
            </div>

            <div className="para-container">
                <p
                    style={{
                        marginBottom: "0.5rem",
                    }}>
                    AvCon - The Future of Aviation is an unparalleled event made
                    possible through the generous support of our sponsors,
                    exhibitors, and partners. This collaboration, including a
                    key partnership with The Irish Air Corps, brings together
                    leading aviation professionals, innovative companies, and
                    educational institutions to create an inspiring experience.
                </p>
                <p
                    style={{
                        marginBottom: "4rem",
                    }}>
                    The event offers school and college groups free access to
                    explore the cutting-edge advancements in aviation, meet
                    industry experts, and engage with interactive exhibits,
                    fostering the next generation of aviation enthusiasts and
                    professionals. Join us in celebrating the future of flight
                    and the minds shaping it.
                </p>
            </div>
            <div className="flex-container align-vertical-middle align-center space-between mb-3">
                <img
                    src={avconLogo}
                    alt="AvCon Sponsored By"
                    style={{ width: "15%" }}
                    className="mr-1"
                />
                <h5>Proudly sponsered by</h5>
            </div>

            {/* SPONSORS */}
            <div clasName="sponsor-container mb-3">
                <Sponsor
                    logoPath={theBigIdeaLogo}
                    logoUrl="https://thebigidea.ie/"
                    altText="The Big Idea logo"></Sponsor>
                <Sponsor
                    logoPath={wayneDennerLogo}
                    logoUrl="https://www.waynedenner.com/"
                    altText="Wayne Denner company logo"></Sponsor>
                <Sponsor
                    logoPath={shannonAviationLogo}
                    logoUrl="https://www.snnairportgroup.ie/"
                    altText="hannon Aviation Museum company logo"></Sponsor>
                <Sponsor
                    logoPath={aviationSkillnetLogo}
                    logoUrl="https://www.skillnetireland.ie/skillnet-business-network/networks/aviation-skillnet"
                    altText="Aviation Skillnet company logo"></Sponsor>
                <Sponsor
                    logoPath={avtrainLogo}
                    logoUrl="https://www.avtrain.aero/"
                    altText="Avtrain company logo"></Sponsor>{" "}
                <Sponsor
                    logoPath={mannaLogo}
                    logoUrl="https://www.manna.aero/"
                    altText="Manna company logo"></Sponsor>
                <Sponsor
                    logoPath={shannonAirportGroupLogo}
                    logoUrl="https://www.snnairportgroup.ie/"
                    altText="Shannon Airport Group company logo"></Sponsor>{" "}
                <Sponsor
                    logoPath={facLogo}
                    logoUrl="https://www.snnfacairportgroup.ie/"
                    altText="FAC company logo"></Sponsor>
                <Sponsor
                    logoPath={facLogo}
                    logoUrl="https://www.snnfacairportgroup.ie/"
                    altText="Shannon Airport Group company logo"></Sponsor>
                <Sponsor
                    logoPath={AirCorpLogo}
                    logoUrl="https://www.military.ie/en/who-we-are/air-corps/"
                    altText="Irish Air Corps company logo"></Sponsor>
                <Sponsor
                    logoPath={forHireLogo}
                    logoUrl="https://www.for-hire.ie"
                    altText="For Hire company logo"></Sponsor>
                <Sponsor
                    logoPath={ODohertysLogo}
                    logoUrl="https://www.odav.tv/"
                    altText="O'Dohertys Audio Video company Logo"></Sponsor>
                <Sponsor
                    logoPath={hireUpLogo}
                    logoUrl="http://hireup.ie/"
                    altText="Hire Up company logo"></Sponsor>
                <Sponsor
                    logoPath={iaaLogo}
                    logoUrl="http://iaa.ie/"
                    altText="Irish Airport Authority logo"></Sponsor>
                <Sponsor
                    logoPath={avconLogo}
                    logoUrl="http://avcon.ie/"
                    altText="AvCon logo"></Sponsor>
                <Sponsor
                    logoPath={TYHubLogo}
                    logoUrl="http://tyhun.ie/"
                    altText="TY Hub logo"></Sponsor>
                <Sponsor
                    logoPath={fwiaLogo}
                    altText="For Women in Avaition logo"
                    logoUrl="https://tyhub.ie/the-future-of-women-in-aviation/"></Sponsor>
                <Sponsor
                    logoPath={eawcLogo}
                    altText="European Aviation Wellbeing Commitee logo"
                    logoUrl="https://twitter.com/eawc_official?lang=en"
                />
                <Sponsor
                    logoPath={droneSpaceLogo}
                    alt="Drone Space company logo"
                    logoUrl="https://www.dronespace.ie/"
                />
                <Sponsor
                    logoPath={eirSpace}
                    altText="Eirspace company logo"
                    logoUrl="https://www.eirspace.org/"
                />
                <Sponsor
                    logoPath={easaLogo}
                    altText="European Aviation Safety Agency logo"
                    logoUrl="https://www.easa.europa.eu/en"
                />
                <Sponsor
                    logoPath={augmentAeroLogo}
                    altText="Augment Aero company logo"
                    logoUrl="https://augmentaero.com/"
                />
                <Sponsor
                    logoPath={aftaLogo}
                    altText="Atlantic Flight Training Academy logo"
                    logoUrl="https://afta.ie/"
                />
                <Sponsor
                    logoPath={aviationIrelandLogo}
                    altText="Aviation Ireland Challenge company logo"
                    logoUrl="https://www.aviationireland.ie/"
                />
                <Sponsor
                    logoPath={logistycsLogo}
                    altText="LogisTYcs Skills company logo"
                    logoUrl="https://www.gov.ie/en/publication/7433e-logistycs/"
                />
                <Sponsor
                    logoPath={rionnIomparLogo}
                    altText="An Rionn Iompar (Department of Transport) logo"
                    logoUrl="https://www.gov.ie/en/organisation/department-of-transport/"
                />
            </div>

            {/* PARTNERS */}
            <div className="flex-col-container mt-3">
                <h6>AvCon In Collaboration with:</h6>
            </div>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Partner
                        logoUrl={AirCorpLogo}
                        partnerName="Irish Air Corps"></Partner>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Partner logoUrl={TYHubLogo} partnerName="TY Hub"></Partner>
                </Grid>
            </Grid>

            {/* MEDIA PARTNERS */}
            <div>
                <h6
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "4rem 0 0",
                    }}>
                    AvCon Media Partner:
                </h6>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 0 6rem 0",
                    }}>
                    <Sponsor
                        logoPath={ODohertysLogo}
                        sponsorName="O'Doherty Media Group"
                    />
                </div>
            </div>
        </main>
    );
}
