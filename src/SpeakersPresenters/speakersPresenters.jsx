import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroSection from "../CommonComponents/HeroSection/HeroSection";
import Speaker from "./speaker";
import GOC from "./PresenterSpeakerImages2024/GOC.jpg";
import GOCHighlight from "./KeyNoteSpeaker/GOCHighlight";
import AllyGarvey from "./PresenterSpeakerImages2024/Ally.JPG";
import PaulButlerLennox from "./PresenterSpeakerImages/PaulButlerLennox.jpeg";
import IanKiely from "./PresenterSpeakerImages2024/IanKiely.JPG";
import SevenJacobs from "./PresenterSpeakerImages/SevenJacobs.jpg";
import RobertConwayKenny from "./PresenterSpeakerImages/RobertConwayKenny.png";
import MelvinKelly from "./PresenterSpeakerImages/MelvinKelly.png";
import DiarmuidORiordan from "./PresenterSpeakerImages/DiarmuidO’Riordan.jpg";
import GerryCreighton from "./PresenterSpeakerImages/GerryCreighton.jpeg";
import PaulKennedy from "./PresenterSpeakerImages/PaulKennedy.jpg";
import AlanCorr from "./PresenterSpeakerImages/AlanCorr.png";
import MuireannBagley from "./PresenterSpeakerImages/MuireannBagley.jpg";
import ShaneCrawte from "./PresenterSpeakerImages/ShaneCrawte.jpg";
import PhilipSmythe from "./PresenterSpeakerImages/PhilipSmythe.jpg";
import DanPepper from "./PresenterSpeakerImages/DanPepper.jpg";
import AlexJoyce from "./PresenterSpeakerImages/AlexJoyce.jpeg";
import LisaMcNamee from "./PresenterSpeakerImages/LisaMcNamee.jpg";
import PatriciaMoore from "./PresenterSpeakerImages/PatriciaMoore.jpg";
import JonathanBlackmore from "./PresenterSpeakerImages/JonathanBlackmore.png";
import GerryHumphreys from "./PresenterSpeakerImages2024/GerryHumphreys.jpg";
import KarlONeill from "./PresenterSpeakerImages/KarlONeill.png";
import BarkanÇilek from "./PresenterSpeakerImages/BarkanÇilek.png";
import SteveConnolly from "./PresenterSpeakerImages/SteveConnolly.jpeg";
import MariaFrost from "./PresenterSpeakerImages/MariaFrost.jpeg";
import AndrewMaher from "./PresenterSpeakerImages/AndrewMaher.jpg";
import LindaByrne from "./PresenterSpeakerImages/LindaByrne.png";
import NiallColeman from "./PresenterSpeakerImages/NiallColeman.jpg";
import PeterAkers from "./PresenterSpeakerImages/PeterAkers.jpg";
import JasonPhelan from "./PresenterSpeakerImages/JasonPhelan.jpeg";
import CaptPaddyLucky from "./PresenterSpeakerImages/CaptPaddyLucky.jpeg";
import AntonioGonzalezGomez from "./PresenterSpeakerImages2024/AntonioGonzalezGomez.jpeg";

export default function SpeakersPresentors2024() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
                <HeroSection
                defaultTitle="Speakers and Presenters"
                defaultSubtitle="We're thrilled to introduce our dynamic duo of presenters, Ally Garvey and Paul Butler Lennox, who will be your guides through this exhilarating journey."
                smallScreenTitle="Speakers and Presenters"
                smallScreenSubtitle="AvCon presenting an event for all things aviation"
                />
            <br />
            <br />
            <p style={{ padding: "0 5%" }}>
                Get ready to soar into the future of aviation at AvCon 2025!
                We're thrilled to introduce our dynamic duo of presenters, Ally
                Garvey and Karl Bowe, who will be your guides through this
                exhilarating journey. From the warm welcome to riveting
                interviews and captivating talks with esteemed guests from the
                aviation world, Ally and TBD will ensure an unforgettable
                experience. Stay tuned for announcements on our line-up of
                guests and talks that will keep you at the edge of your seat.
                Trust us, you won't want to miss the electrifying show we have
                in store for you.
            </p>
            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                <br />
                <br />
                <hr />
                <br />
            </Box>
            <h5 style={{ textAlign: "center" }}>AvCon Presenters</h5>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{ padding: "5%" }}>
                        <Speaker
                            SpeakerImage={PaulButlerLennox}
                            SpeakerName="Paul Butler Lennox"
                            SpeakerBio="Paul Butler Lennox is a Dublin-born actor, artist and emerging director of both drama and documentary. He's earned accolades including Best Actor at the DISF Festival and a Best Supporting Actor nomination at the Underground Cinema Awards. Known for standout roles such as Ceaser in Marauders and Jake in The Voice, Paul continues to gain international recognition. His documentary Seven Floors Up received the Axis Assemble Award and was selected for pitching at the Celtic Media Awards 2025.
                            Upcoming work includes playing Oscar in Adam Mann's Coolatin. Paul's lead in A Day Like Today was selected for the Galway Film Fleadh, shown on Aer Lingus flights and aired in Australia—he also co-produced the film. He's developing the mini-series Flares with Mark O'Connor and Patrick Osborne.
                            On screen, Paul has appeared in Hardy Bucks, The Tudors, and Rental Boys, and films like Pebble (BAFTA-nominated) and Halowin, produced by Lars Von Trier. On stage, he has performed at The Project, Smock Alley, The Peacock, and The Samuel Beckett Theatre.
                            With over two decades in voice work, Paul is an accomplished VO artist, director, coach, and podcast producer—having produced 300+ episodes across film, TV, and sport. He has created work for RTE, BBC, Google and Netflix, and directed housing crisis documentaries like The Picturehouse and Cherished Unequally.
                            A scholarship recipient of both the Gaiety School of Acting and John Boorman's Irish Film School, Paul co-founded FNI (WeAreFNI.com) and KINO D, and has secured Screen Ireland funding across multiple projects. He is a regular MC, panellist and speaker at film and football events, a VO director in animation, and a featured guest at industry events such as the One Voice Conference and IADT."
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{ padding: "5%" }}>
                        <Speaker
                            SpeakerImage={AllyGarvey}
                            SpeakerName="Ally Garvey"
                            SpeakerBio="Working within the fashion and media industry for over 15 years, Ally Garvey thrives on delivering the latest showbiz news and the Hottest topics to a wide audience. Ally has worked on live tv for over a number of years now on a range of different broadcasting stations where quick thinking and wide range of conversational skills are a must. 
                            Ally's favourite environment to work in is a live audience, she loves to engage with co. presenters and the audience.
                            Check out  Ally's instagram page to get a glimpse of the many different events both on screen and off screen she has worked on."
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                <br />
                <hr />
                <br />
            </Box>
            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
            <h5 style={{ textAlign: "center" }}>Fireside Chat Hosts</h5>
            <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{ padding: "5%" }}>
                        <Speaker
                            SpeakerImage={IanKiely}
                            SpeakerName="Ian Kiely"
                            SpeakerBio="Ian Kiely is the Founder of Drone Space Ltd, a Dublin-based consultancy at the forefront of UAV innovation. With deep expertise in Unmanned Traffic Management (UTM), Counter-UAS (C-UAS), aerial surveying, and urban air mobility, Ian leads Drone Space in delivering advanced drone services and regulatory solutions across Europe
                            He is a recognized international moderator and speaker, having hosted flagship events like the Air Taxi World Congress and Airport Drone Protection Summit in London and Paris . Ian also founded and organised Drone & Tech Expo Ireland at the RDS in Dublin (2015-2016), and remains a frequent contributor to industry panels, podcasts, and publications 
                            Ian's background includes winning the European Space Masters competition for satellite navigation and later judging its finals in 2020/21 . He also develops professional drone training with Engineers Ireland, including CPD-accredited courses.
                            Whether moderating high-profile summits or delivering focused technical talks, Ian brings hands-on UAV project experience, regulatory insight, and a vision."
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{ padding: "5%" }}>
                        <Speaker
                            SpeakerImage={SevenJacobs}
                            SpeakerName="Seven Jacobs"
                            SpeakerBio="Seven Jacobs is a speaker, educator, podcast host, and coach who helps high-performers reclaim clarity, confidence, and calm — so they can lead with purpose and power. His work blends practical tools, emotional intelligence, and deeper questions of what it truly means to lead well. 
                            His podcast, Lost and Searching, explores the inner challenges of leadership and life. His training programs and events for ambitious professionals bring out the lifechanging energy we need to get the greatest results available to us. He also writes weekly on Substack to explore development in life from this perspective.
                            As a TEDx speaker, NLP-trained coach, and previous co-founder of 4 small businesses, Seven brings lived experience to his work. From helping scale companies and communities, to building and leading award-winning accelerator programs. He has worked with global brands like Nike and Meta, supported hundreds of leaders, and built communities ranging from 1,000 to 6,000 members.                            
                            Whether working 1:1, leading workshops, or hosting conversations, Seven’s mission is to help us discover and cultivate our greatest self-leader.
                            He fundamentally believes that conscious leadership, rooted in courageous action, is how we shape a better future — and that joy and discovery are serious tools for transformation."
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ padding: { xs: "0 2%", md: "0 5%" } }}>
                <br />
                <hr />
                <br />
            </Box>
            <div style={{ textAlign: "center" }}>
                <h5>AvCon Speakers</h5>
                <Box sx={{ flexGrow: 1 }}>
                            <Grid style={{ padding: "3%" }}>
                                <Grid
                                    item
                                    xs={12} // Full-width on extra-small screens (mobile)
                                    sm={12} // Full-width on small screens (tablet)
                                    md={6} // Half-width on medium screens (laptops)
                                    lg={6} // Half-width on large screens (desktops)
                                >
                                    <GOCHighlight
                                        SpeakerImage={GOC}
                                        SpeakerName="GOC, Brigadier General Rory O'Connor"
                                        SpeakerBio={`"A Welcome Note to AvCon - the Future of Aviation from the Air Corps
                        As we look ahead to the upcoming Aviation Convention hosted by the Irish Air Corps this November, we envision a groundbreaking event that celebrates the dynamic world of aviation. This convention is a milestone for the Irish Air Corps, students, schools, and the wider community.
                        The Irish Air Corps, with its tradition of excellence, courage, and innovation, is excited to welcome everyone to our base. This event is more than a gathering; it's an inspiration for the next generation of aviators, engineers, and innovators.
                        We have a stellar lineup of guest speakers, including aero engineers, pilots, technicians, and Air Traffic Controllers from the Air Corps. Their insights and experiences highlight the importance of collaboration and mentorship in aviation.
                        For students and schools, this convention offers an unparalleled opportunity to learn from the best, engage with cutting-edge technology, and envision a future where their dreams take flight. Hands-on workshops, interactive exhibits, and panel discussions are designed to ignite curiosity and foster a passion for aviation.
                        Participants will explore various aspects of aviation, from piloting and navigation to aerospace engineering and air traffic control, gaining firsthand experience and inspiration. This event also underscores the importance of STEM education in achieving their goals.
                        We extend our heartfelt gratitude to the organisers, sponsors, guest speakers, and participants. Your support makes this event possible. To the students, seize this opportunity to ask questions, explore, and dream big.
                        The sky is not the limit; it is just the beginning. Let this convention be the launchpad for your future in aviation.
                        Thank you, and enjoy the convention!" - GOC, Brigadier General Rory O'Connor`}

                        />
                    </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}> 
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={RobertConwayKenny}
                            SpeakerName="Dr. Robert (Rob) Conway-Kenny"
                            SpeakerBio="Dr. Robert (Rob) Conway-Kenny is an innovation specialist with expertise in space technology, research project management, and strategic outreach. As the ESA Phi-Lab Ireland Manager based at IMR, he leads collaborative initiatives at the forefront of space research and technology development. Robert's career journey started with chemistry and materials science, before a deliberate career move to Space - including a research award to NASA's Jet Propulsion Laboratory in California, and several initiatives with the European Space Agency. Rob is passionate about science and space outreach, community engagement, and creating meaningful impact through the advancement of the commercial space sector."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={MelvinKelly}
                            SpeakerName="Melvin Kelly"
                            SpeakerBio="Melvin Kelly serves as the Senior Vice President Technical at Jackson Square Aviation (JSA). In this role, he is responsible for the regional technical teams and provides crucial technical input for aircraft leases at the transaction level. 
                            Melvin's career in aviation began as an apprentice with the Irish Air Corps. He has since accumulated 30 years of experience across various facets of the industry, working with airlines, Maintenance, Repair, and Overhaul (MRO) organizations, and lessors. 
                            Before joining JSA, Melvin spent eight years with Avolon and five years with Nordic Aviation Capital. His roles involved leading negotiations for aircraft leases, supporting the delivery of new aircraft, and managing aircraft transitions between operators. His professional background also includes tenure at Vueling Airlines, Lufthansa Technik, and Team Aer Lingus. 
                            Throughout his career, Melvin has gained extensive hands-on experience with a diverse range of Airbus and Boeing aircraft. He holds an EASA Part 66 B1 and C Aircraft Engineers Licence, underscoring his technical expertise. 
                            Melvin possesses a comprehensive understanding of aircraft maintenance, airline operations, and aircraft leasing, developed from both the lessor's and the airline's perspectives."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={DiarmuidORiordan}
                            SpeakerName="Diarmuid O'Riordan"
                            SpeakerBio="Diarmuid's professional journey began in a structured and disciplined environment, where he quickly progressed through a series of specialised roles. He became a trusted figure in both operational and instructional capacities, earning multiple accolades for his academic and leadership achievements. His early career laid a solid foundation for future roles that would span both civilian and international sectors. 
                            After transitioning into a new domain, he immersed himself in frontline operational duties before moving into key instructional roles within a major organisation. This period saw him navigating both short- and long-distance responsibilities, further expanding his practical expertise. 
                            Taking time away from this role, he pursued a position abroad, where he assumed senior responsibilities in a complex and high-stakes operational setting. There, he oversaw advanced training delivery and worked within a multinational context, contributing to an organisation managing a high volume of activity across challenging conditions. 
                            Despite a demanding schedule, he continued to stay active in his original profession, working across a wide range of missions and collaborating with a diverse list of partners. This included operations under extreme environmental conditions and in areas requiring careful coordination and adaptability. His assignments took him across multiple continents, involving both people-focused and logistics-based tasks that often pushed the boundaries of traditional expectations. 
                            In parallel, Diarmuid established a successful enterprise focused on high-end professional development and consultancy. His organisation has since become a recognised name in its field, offering tailored solutions to a wide array of clients across both the public and private sectors."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={GerryCreighton}
                            SpeakerName="Gerry Creighton"
                            SpeakerBio="Founder of Global Elephant Care and former Operations Manager at Dublin Zoo, Gerry Creighton brings over 40 years of expertise in zoo animal care, welfare, and logistics. Renowned globally for his work in elephant wellness and habitat design, Gerry has advised leading zoos across Europe, the US, Australia, the Middle East, and Asia. He has been featured in the award-winning TV series The Zoo, delivered a TEDx talk, and authored the best-selling autobiography Raised by the Zoo. At AvCon, Gerry will share fascinating insights in 'The Wild Logistics of Moving Giants and Other Animals', offering a rare behind-the-scenes look at the complex, global operations involved in transporting and caring for some of the world's most extraordinary species."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={AlanCorr}
                            SpeakerName="Alan Corr"
                            SpeakerBio="Alan Corr is a highly experienced aviation professional with over 30 years of technical and leadership expertise. He's currently the Vice President, Technical at Jackson Square Aviation (JSA). At JSA, Alan manages complex aircraft transitions, including lease returns, repossessions, sales, and acquisitions. He is key in reviewing letters of intent (LOIs), managing redelivery obligations, and leading global teams through commercial negotiations.
                            Beginning his career as an aircraft mechanic apprentice with the Irish Air Corps, Alan's hands-on engineering experience spans prominent facilities worldwide. This foundational knowledge, coupled with a Specialist Diploma in Aviation Leasing & Finance and a licensed B1.1 & C engineer certification, gives him a holistic view of the aviation lifecycle. 
                            Alan's career journey reflects a deep understanding of aviation's technical landscape, his background includes significant roles at Elix Aviation Capital and consultancy for major lessors like GECAS, SMBC, and NAC.
                            Alan Corr offers a unique blend of technical mastery, operational leadership, and sharp commercial acumen, making him an invaluable voice on the evolving dynamics and strategic challenges within the aircraft leasing sector."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={PaulKennedy}
                            SpeakerName="Paul Kennedy"
                            SpeakerBio="Paul Kennedy is a globally recognised authority in composite materials and aerospace structures, with 35 years of experience spanning industry, education, and national
                            policy development. As Director of Worldwide Composite Services (WCS), Paul leads a cutting-edge EASA
                            Part 145 FAA Repair Station, approved facility, specialising in the repair and recovery
                            of advanced composite components for global airline operators, lessors, and MROs. Under his leadership, WCS has become a centre of excellence for cost-e*ective, OEM-alternative repairs, collaborative Part 21J design solutions, and sustainable composite refurbishment practices.
                            Beyond the hangar, Paul has a global network of key stakeholders and influencers,
                            across multiple sectors. Paul has successfully led international benchmarking
                            exercises and has leveraged this information to develop Ireland's National Policy
                            Document for Composites, thereby, enabling the strategic direction of the industry to
                            align with innovation, sustainability, and international competitiveness.
                            He is a passionate educator, having lectured at several leading universities on subjects
                            ranging from advanced composites and aerospace structures to regulatory compliance and innovation strategy. His work bridges academic insight with real-
                            world application, helping develop the next generation of aviation professionals and engineers."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={MuireannBagley}
                            SpeakerName="Muireann Bagley"
                            SpeakerBio="Muireann Bagley is a 5th-year student with her sights firmly set on a career in the skies. After her first flying lesson at just 11 years of age, she set herself the goal of earning her Private Pilot’s Licence during her TY year. She passed all written exams on the first attempt with a 95% average grade and completed her PPL flight test at Navan Airfield on her 17th birthday, the earliest possible date, becoming one of Ireland’s youngest private pilots. She earned a Delta Air Lines scholarship to the National Flight Academy Summer Camp in Florida, and during TY she graduated from DCU’s Early University Entrance Engineering programme. She also attended the Centre for Talented Youth Ireland in DCU and explored courses from aeronautical engineering to advanced maths. When not in the cockpit, Muireann can usually be found on the golf course — though she admits her landings are better than her putting. At Avcon, Muireann will share her journey from the classroom to the cockpit, and her top tips for aspiring young aviators."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={ShaneCrawte}
                            SpeakerName="Shane Crawte"
                            SpeakerBio="Shane Crawte is a Director in EY’s Aviation Finance practice, bringing over a decade of technical experience combined with financial insight to deliver solutions that professional services firms don’t traditionally offer in aviation. His background spans military and civilian operations, with hands on expertise in rotary and fixed‑wing aircraft and a proven record of building and scaling technical teams and operations. Before joining EY, Shane led Technical Asset Management at another leading professional services firm, managing back-office support for a portfolio of more than 1,000 aircraft (MSNs). He built the team from the ground up into a high‑performing unit of 15 specialists, setting rigorous training standards including General Familiarisation on Boeing 737 and Airbus A320 platforms. Earlier, he served as Technical Team Lead at a Part‑145 approved powerplant overhaul shop, helping grow operations from inception to a 16‑bay capability across multiple engine types. Shane has worked in multiple MROs worldwide and delivered complex projects such as back to source documentation reviews, records audits, shop visit oversight, and lease transitions. His ability to combine technical consulting with financial acumen gives clients a perspective that drives smarter decisions, reduces risk, and unlocks value across the asset lifecycle. An ACA candidate with Chartered Accountants Ireland, Shane combines technical depth with financial insight to deliver practical, commercially focused solutions. Based in Dublin, he brings a unique perspective to aviation finance helping clients optimise asset performance, manage risk, and unlock value in a rapidly evolving market."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={AlexJoyce}
                            SpeakerName="Alex Joyce"
                            SpeakerBio="Alex Joyce is a dedicated and highly capable Senior First Officer and Type Rating Instructor at Ryanair. Despite her young age, she brings a wealth of experience and professionalism to the role.
                            After completing her integrated flight training at Atlantic Flight Training Academy in just 15 months, Alex began her career with Ryanair shortly thereafter. Over the past seven years, she has built an impressive track record, spending the last five years flying for Ryanair and being based in both Dublin and Málaga.
                            In addition to her role as a line pilot, Alex has taken on significant instructional responsibilities. She has played a key role in training cadets during their MCC phase, guiding First Officers through their command upgrades, and delivering both refresher and recurrent simulator training for current Ryanair crews.
                            Alex completed her Leaving Certificate in 2017 before relocating to Cork to begin her aviation journey. Her passion for flying and continuous drive to expand her knowledge make her a valuable asset to any team and a respected mentor within the training community."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={DanPepper}
                            SpeakerName="Dan Pepper"
                            SpeakerBio="Vistajet First Officer and Senior Flight Instructor at AFTA. Hobby flyer since 2006 turned commercial pilot in 2019, prior to commercial flying, Dan worked as a self employed Painter and Decorator, built a solid client base over 10 years, working with both the private sector and governmental departments through long and short term contracts, now 6 years as flight Instructor teaching Single and Multi engine IR flight training including Advanced UPRT. Currently working closely with Afta as an aerial survey captain on some noticeable contracts. He gets to travel the globe with Vistajet on the Embraer Legacy, and still enjoys to teach back home in Cork for 2 weeks every month. As it stands, over 3,000 hours and 10 types."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={PhilipSmythe}
                            SpeakerName="Philip Smythe"
                            SpeakerBio="Philip has a life long interest in aviation a former commercial and corporate pilot, Philip has been a flight instructor for over 40 years. Captain Smythe has been with AFTA since its inception in 1995, training pilots at all levels from Private Pilots Licence (PPL) to Commercial Pilots Licence (CPL) and Multi-Engine Instrument Rating qualifications. As Safety Manager, Philip conducts internal safety audits and promotes, maintains and oversees flight safety and best practices on a daily basis. Philip is an Irish Aviation Authority (IAA) certified Flight Examiner. He has witnessed a growing focus on environmental sustainability in the aviation industry over his time with the business."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={GerryHumphreys}
                            SpeakerName="Gerry Humphreys"
                            SpeakerBio="Gerry is an accomplished aviator with over 40 years of experience, 14,000 flying hours logged on more than 120 different aircraft types. After completing a degree in Aeronautical Engineering at Queen's University Gerry spent 20 years in the RAF, where he primarily flew single-seat fast jets such as the Hunter, Hawk, and Harrier. After leaving the RAF, Gerry transitioned to corporate aviation for 10 years, during which time he also constructed a runway at his home, built an aircraft, performed in air displays, and became a certified flying instructor. Currently, Gerry serves as the Deputy Head of Training, where he is responsible for upholding the highest standards in all aspects of pilot training. He also leads instruction in aerobatics, tailwheel conversions, and Upset Recovery and is an EASA flight examiner. Additionally, Gerry is a board member of the Foynes Flying Boat and Maritime Museum and serves as the Chairman of the General Aviation Safety Council of Ireland."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={KarlONeill}
                            SpeakerName="Karl O'Neill"
                            SpeakerBio="Karl is an aviation professional with over 25 years in the airline industry. He studied Business Law at UCD and subsequently completed a MSc in Business Management at the UCD Smurfit Business School, Dublin.
                            He completed his Flight Training at British Aerospace Flight Training in Jerez, Spain where he was awarded the Best Pilot Award for 1999.
                            Karl has flown several commercial aircraft and is currently rated on the Airbus A320 and Airbus A330. He has held several airline management and post holder positions.
                            He presently is Chief Instructor with Aer Lingus in Dublin. In his operational capacity, he is a Senior Type Rating Examiner. He has been involved in many innovative projects and was Vice -Chair of the European ATPG - an expert body providing opinion to the EU on Air Crew regulation. In May 2024 he received the Flight Training Europe Award for Excellence in Flight Training.
                            He is a keen cyclist and avid sports fan. He spends his free time coaching as a certified GAA coach with Kilmacud Crokes and Rugby coach with Blackrock College RFC."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={SteveConnolly}
                            SpeakerName="Steve Connolly"
                            SpeakerBio="Steve is a professional pilot with over 18 years of military and commercial aviation experience. He is currently flying the Airbus A320/1 on both short and long haul networks with Aer Lingus. During his service in the Air Corps he flew a variety of aircraft including the Pilatus PC-9m, Cessna 172H, and Britton-Norman Defender. Steve qualified as an aircraft commander on the CASA CN235MPA and was a member of the board selected to replace that fleet. He was part of the introductory team for the Pilatus PC-12NG, and flew it for two years prior to leaving the military. He has extensive experience in SAR, air ambulance and logistics operations. Steve holds a BSc in Management and Aeronautical Studies, as well as a Post Graduate Diploma in Adult Guidance and Counselling. He was a qualified Crew Resource Management Instructor during his time in the military, and currently instructs on PPL, ATPL and Flight Operations courses for ASG."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={LisaMcNamee}
                            SpeakerName="Lisa McNamee"
                            SpeakerBio="Dr Lisa McNamee is a practicing doctor, qualified aviation medicine examiner and an aerospace medicine researcher. She completed the European Space Agency's Space Physician training programme and the Principles of Aviation and Space Medicine short course at the University of Texas Medical Branch. She sits on the United Nations Office for Outer Space Affairs' Space & Global Health Taskforce. She is an honorary research fellow at Royal College of Surgeons in Ireland. She holds degrees from Trinity College Dublin, Royal College of Surgeons in Ireland and University College Dublin."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={PatriciaMoore}
                            SpeakerName="Patricia Moore"
                            SpeakerBio="Dr Patricia Moore is Co-founder and Director of the Irish Space Association (ISA), an industry-led cluster advancing the development of Ireland’s rapidly growing space sector. She is also Managing Director of Promethio, a Dublin-based technology and consultancy company that works with clients and partners in emerging and deep-tech sectors, with a focus on organisations developing or applying space-based systems and services. Patricia’s career spans both industry and academia. She has previously served as CTO of the space technology and business development consultancy Mindseed, and as an Assistant Professor in the School of Electronic Engineering at Dublin City University (DCU). She holds both a PhD and a BEng in Engineering from DCU."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={JonathanBlackmore}
                            SpeakerName="Jonathan Blackmore"
                            SpeakerBio="Jonathan Blackmore MSCSI MRICS is a Chartered Surveyor, lecturer, and researcher specialising in drone technologies, construction surveying, and geospatial analysis. He is a lecturer at the Technological University of the Shannon (TUS), where he developed and leads Ireland’s first Level 7 Certificate in Drones in Construction—a pioneering programme integrating unmanned aerial systems (UAS) into professional surveying and construction practice.
                            As founder of BKMSURVEYING, Jonathan combines industry expertise with academic research, focusing on the application of AI, autonomous systems, LiDAR, and hyperspectral imaging. His work explores how advanced drone technologies can transform construction workflows, environmental monitoring, and sustainable land management. He is particularly interested in the use of UAS for habitat assessment and agri-environment schemes, helping reduce observer error, enhance accuracy, and support carbon sequestration and biodiversity goals.
                            Jonathan has a strong track record of industry engagement and knowledge transfer, regularly contributing to professional networks, conferences, and collaborative projects. He actively promotes sustainable practices and nature-friendly farming, positioning drone-based geospatial solutions as tools for both commercial efficiency and environmental stewardship.
                            With dual expertise as a practitioner and educator, Jonathan’s mission is to advance the responsible adoption of drone and geospatial technologies across construction, environmental management, and research sectors. He is committed to training the next generation of professionals to embrace innovation while maintaining ethical and sustainable practices."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={BarkanÇilek}
                            SpeakerName="Barkan Çilek"
                            SpeakerBio="Mr. Barkan Çilek earned his Bachelor of Science (2011) and Master of Science (2014) degrees in Aerospace Engineering from Middle East Technical University (METU), Türkiye. He began his career at ASELSAN, Türkiye’s leading defense and aerospace company, where he contributed to multiple national defense projects as a Guidance, Navigation & Control (GNC) and Mathematical Modeling & Simulation Engineer. Following this, he transitioned into the aerial logistics sector. He has worked for a last-mile aerial logistics company in Ireland and a middle-mile aerial logistics company in the US. He is now back in the defence industry to work in a company in New Zealand as a GNC Engineer. Mr. Çilek is a native Turkish speaker, fluent in English, and proficient in Russian at an intermediate level."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={MariaFrost}
                            SpeakerName="Maria Frost"
                            SpeakerBio="Ms. Frost is the Senior Vice President of Human Resources for elfc. Maria joined elfc in 2012 and oversees the global HR function across locations in Shannon, London, Boston, and Singapore. Maria leads strategic HR initiatives focused on organisational development, talent management, employee engagement, and leadership development. 
                            Maria is a Chartered Member of the CIPD, Chairperson of the ICBE Aviation Skillnet Steering Committee, and a Steering Group Member of the Shannon Chamber Skillnet Group. She is committed to advancing industry skills, training, and development, promoting HR best practices, and driving impactful organisational change. Maria holds a Business Degree from the University of Limerick, a Master of Science in Human Resource Management, and a Specialist Diploma in Aviation Leasing & Finance."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={AndrewMaher}
                            SpeakerName="Andrew Maher"
                            SpeakerBio="Drone Clean is proud to be Ireland's first company to offer revolutionary drone powered cleaning services, specialising in safe and efficient high-rise window and facade cleaning. Founded by Andrew Maher whose Poshwash LTD boasts of nearly 30 years of experience in high-rise window cleaning. Drone Clean leverages cutting-edge technology to achieve unparalleled results."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={LindaByrne}
                            SpeakerName="Linda Byrne"
                            SpeakerBio="Linda Byrne is a seasoned aviation professional with over 25 years of experience in the airline industry.
                            She holds a Master's degree in Human Resources Management from the National College of Ireland, where she cultivated a deep interest in recruitment and talent development. She began her career at the Aer Lingus Customer Contact Centre, assisting customers with flight bookings and inquiries. She quickly progressed to a role as a HR advisor, where her passion for human resources began to take shape. This led her to pursue formal studies in HRM, laying the foundation for a successful career in talent acquisition. This academic foundation supported her transition into a talent acquisition career, starting as a Resource Optimisation Advisor. Over the years, Linda has built extensive expertise in all facets of aviation recruitment, having successfully recruited for roles across all levels within the airline. She brings particular strength in psychometric testing and assessment, ensuring a robust and data-driven approach to candidate selection.
                            In her current role as Senior Talent Acquisition Specialist at Aer Lingus, Linda leads the pilot recruitment and selection process for pilots. She plays a key role in shaping the airline's future talent pipeline through strategic talent planning. Outside of her professional responsibilities, Linda is passionate about travel, fitness, and community engagement. She is a strong advocate for gender diversity in aviation and is committed to narrowing the gender gap in the industry by encouraging and mentoring women to explore careers in aviation. She also dedicates her spare time to volunteering and has served on the Board of Directors of Aviate Credit Union for the past seven years."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={NiallColeman}
                            SpeakerName="Niall Coleman"
                            SpeakerBio="Niall Coleman has worked for Aer Lingus for the past 46 years mainly in Ground Operations. His current role is as a Senior Station Controller based in the HCC ( Hub Control Centre in T2) where he is responsible for keeping the Aer Lingus Operation on time in a safe and secure way dealing with many departments within the airline. His role operates on a 24/7 roster. He has worked in many frontline roles over the years which allowed him to gain the experience to carry out his duties in his current role effectively."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={PeterAkers}
                            SpeakerName="Peter Akers"
                            SpeakerBio="Peter Akers is an aircraft mechanic who began his career training with Rolls-Royce PLC before moving into aircraft maintenance. That early experience gave him a solid technical foundation and an appreciation for the standards of precision and safety that define aviation engineering. Building on this, he is now working toward full licensure while continuing to develop his skills through hands-on maintenance.
                            Alongside this, Peter runs his own aviation maintenance contracting business, Akers Avia, which has broadened his perspective on both the technical and operational sides of the industry. This venture reflects his determination to keep learning and to engage with aviation from multiple angles.
                            Aviation has always been Peter's passion. From his early fascination with aircraft to his long-term goal of becoming a pilot, he has been driven by curiosity and a desire to grow within the field. At AvCon.ie, he looks forward to sharing his journey and encouraging the next generation to pursue careers in aviation, showing that progress is built not only on expertise but also on enthusiasm and a commitment to learning."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={JasonPhelan}
                            SpeakerName="Jason Phelan"
                            SpeakerBio="Jason's love for aviation ignited when he experienced his first Airshow at Biggin Hill, London at the tender age of 3. Beginning a career in aviation in 2004 with the UK Civil Aviation Authority (CAA) as an aircraft registration administrator, he transitioned to the Flight Operations General Aviation division. Relocating to Ireland in 2012, his background paved the way for a career in aviation in Ireland and he continues to be aligned with the industry professionally and passionately as a hobby. In December 2022 he created The Adventures of Capt Paddy & Lucky. This initiative involves two teddy bears embarking on flying adventures across Ireland and beyond to support two prominent Irish charities, LauraLynn  Ireland's Children's Hospice and Dogs Trust Ireland"
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={CaptPaddyLucky}
                            SpeakerName="Capt Paddy & Lucky"
                            SpeakerBio="After three unforgettable years of adventure, laughter, and countless cuddles, Capt Paddy and Lucky will be parting ways in January 2026. These much-loved globetrotting teddy bears have brought joy to so many, and now they're embarking on one final mission: raising funds for LauraLynn Children's Hospice and Dogs Trust Ireland. Together, they've already helped raise €12,000 for these two incredible charities—and the journey isn't over just yet."
                            />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                            <Speaker 
                            SpeakerImage={AntonioGonzalezGomez}
                            SpeakerName="Antonio Gonzalez Gomez"
                            SpeakerBio="Antonio Gonzalez Gomez is a citizen of the world. However his roots can be traced back to Galicia, in north west Spain. He currently works at the European Union Aviation Safety Agency (EASA) as a Safety Promotion Business Partner within the Communications department, leading the promotion campaign for Drones and Urban Air Mobility. Antonio has enjoyed 18 fulfilling years at EASA in Germany. Before that, he worked in banking and at British Airways, focusing on environmental issues. Passionate about aviation from a young age, he has dedicated the last three years to making aviation a more appealing career and life choice, especially for young people seeking a purpose and challenges that aviation can provide."
                            />
                        </Grid>
                    </Grid>
                </Box>
        </div>
      </main>

    );
}
