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
            <div className="flex-container align-vertical-middle align-center mb-1">
                <img
                    src={avconLogo}
                    alt="AvCon Sponsored By"
                    style={{ width: "15%" }}
                    className="mr-1"
                />
                <h4>Proudly sponsered by</h4>
            </div>

            {/* SPONSORS */}
            <div className="sponsor-container mb-3">
                <Sponsor
                    logoPath={theBigIdeaLogo}
                    linkURL="https://thebigidea.ie/"
                    altText="The Big Idea logo"></Sponsor>
                <Sponsor
                    logoPath={wayneDennerLogo}
                    linkURL="https://www.waynedenner.com/"
                    altText="Wayne Denner company logo"></Sponsor>
                <Sponsor
                    logoPath={shannonAviationLogo}
                    linkURL="https://www.snnairportgroup.ie/"
                    altText="hannon Aviation Museum company logo"></Sponsor>
                <Sponsor
                    logoPath={aviationSkillnetLogo}
                    linkURL="https://www.skillnetireland.ie/skillnet-business-network/networks/aviation-skillnet"
                    altText="Aviation Skillnet company logo"></Sponsor>
                <Sponsor
                    logoPath={avtrainLogo}
                    linkURL="https://www.avtrain.aero/"
                    altText="Avtrain company logo"></Sponsor>{" "}
                <Sponsor
                    logoPath={mannaLogo}
                    linkURL="https://www.manna.aero/"
                    altText="Manna company logo"></Sponsor>
                <Sponsor
                    logoPath={shannonAirportGroupLogo}
                    linkURL="https://www.snnairportgroup.ie/"
                    altText="Shannon Airport Group company logo"></Sponsor>{" "}
                <Sponsor
                    logoPath={facLogo}
                    linkURL="https://www.snnfacairportgroup.ie/"
                    altText="FAC company logo"></Sponsor>
                <Sponsor
                    logoPath={AirCorpLogo}
                    linkURL="https://www.military.ie/en/who-we-are/air-corps/"
                    altText="Irish Air Corps company logo"></Sponsor>
                <Sponsor
                    logoPath={forHireLogo}
                    linkURL="https://www.for-hire.ie"
                    altText="For Hire company logo"></Sponsor>
                <Sponsor
                    logoPath={ODohertysLogo}
                    linkURL="https://www.odav.tv/"
                    altText="O'Dohertys Audio Video company Logo"></Sponsor>
                <Sponsor
                    logoPath={hireUpLogo}
                    linkURL="http://hireup.ie/"
                    altText="Hire Up company logo"></Sponsor>
                <Sponsor
                    logoPath={iaaLogo}
                    linkURL="http://iaa.ie/"
                    altText="Irish Airport Authority logo"></Sponsor>
                <Sponsor
                    logoPath={avconLogo}
                    linkURL="http://avcon.ie/"
                    altText="AvCon logo"></Sponsor>
                <Sponsor
                    logoPath={TYHubLogo}
                    linkURL="http://tyhun.ie/"
                    altText="TY Hub logo"></Sponsor>
                <Sponsor
                    logoPath={fwiaLogo}
                    altText="For Women in Avaition logo"
                    linkURL="https://tyhub.ie/the-future-of-women-in-aviation/"></Sponsor>
                <Sponsor
                    logoPath={eawcLogo}
                    altText="European Aviation Wellbeing Commitee logo"
                    linkURL="https://twitter.com/eawc_official?lang=en"
                />
                <Sponsor
                    logoPath={droneSpaceLogo}
                    alt="Drone Space company logo"
                    linkURL="https://www.dronespace.ie/"
                />
                <Sponsor
                    logoPath={eirSpace}
                    altText="Eirspace company logo"
                    linkURL="https://www.eirspace.org/"
                />
                <Sponsor
                    logoPath={easaLogo}
                    altText="European Aviation Safety Agency logo"
                    linkURL="https://www.easa.europa.eu/en"
                />
                <Sponsor
                    logoPath={augmentAeroLogo}
                    altText="Augment Aero company logo"
                    linkURL="https://augmentaero.com/"
                />
                <Sponsor
                    logoPath={aftaLogo}
                    altText="Atlantic Flight Training Academy logo"
                    linkURL="https://afta.ie/"
                />
                <Sponsor
                    logoPath={aviationIrelandLogo}
                    altText="Aviation Ireland Challenge company logo"
                    linkURL="https://www.aviationireland.ie/"
                />
                <Sponsor
                    logoPath={logistycsLogo}
                    altText="LogisTYcs Skills company logo"
                    linkURL="https://www.gov.ie/en/publication/7433e-logistycs/"
                />
                <Sponsor
                    logoPath={rionnIomparLogo}
                    altText="An Rionn Iompar (Department of Transport) logo"
                    linkURL="https://www.gov.ie/en/organisation/department-of-transport/"
                />
            </div>

            {/* PARTNERS */}
            <h4 className="mt-3 text-center">AvCon In Collaboration with:</h4>

            <Grid
                container
                justifyContent="center"
                padding={{
                    xs: "0 2%",
                }}>
                <Grid item>
                    <Partner
                        logoPath={AirCorpLogo}
                        partnerName="Irish Air Corps"
                        partnerURL="https://www.military.ie/en/who-we-are/air-corps/"></Partner>
                </Grid>
                <Grid>
                    <Partner
                        logoPath={TYHubLogo}
                        partnerName="TY Hub"
                        partnerURL="http://tyhun.ie/"></Partner>
                </Grid>
            </Grid>

            {/* MEDIA PARTNERS */}
            <div>
                <h4
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "4rem 0 0",
                    }}>
                    AvCon Media Partner:
                </h4>
                <div
                    className="media-partner-container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 0 6rem 0",
                    }}>
                    <Sponsor
                        logoPath={ODohertysLogo}
                        altText="O'Doherty Media Group logo"
                        linkURL="https://www.odav.tv/"
                    />
                </div>
            </div>
        </main>
    );
}
