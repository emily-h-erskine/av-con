import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Speaker from "./speaker";
import KarlBoweImage from './PresenterSpeakerImages/KarlBowe.jpeg';
import AllyGarvey from './PresenterSpeakerImages/Ally.JPG';
import JulieGarland from './PresenterSpeakerImages/JudieGarland.jpeg';
import JohnDrysdale from './PresenterSpeakerImages/JohnDrysdale.jpg';
import Bobby from './PresenterSpeakerImages/Bobby.png';
import KimMackenzieDoyle from './PresenterSpeakerImages/KimMackenzieDoyle.png';
import IanKiely from './PresenterSpeakerImages/IanKiely.JPG';
import ValentinaFitzpatrick from './PresenterSpeakerImages/ValentinaFitzpatrick.png';
import GOC from './PresenterSpeakerImages/GOC.jpg'
import GOCHighlight from "./GOCHighlight";
import LorcanGeraghty from "./PresenterSpeakerImages/LorcanGeraghty.jpeg";
import NicolaNiRiada from "./PresenterSpeakerImages/NicolaNiRiada.jpg";
import JaneMagill from "./PresenterSpeakerImages/JM.jpg";
import JasonPhelan from "./PresenterSpeakerImages/JasonPhelan.jpg";
import CaptPaddyLucky from "./PresenterSpeakerImages/CaptPaddy&Lucky.jpg";
import ElaineHarding from "./PresenterSpeakerImages/ElaineHarding.jpg";
import WayneDenner from "./PresenterSpeakerImages/WayneDenner.png";
import NealSkelton from "./PresenterSpeakerImages/NealSkelton.JPG";
import AnthonyAttoumani from "./PresenterSpeakerImages/Anthony Attoumani .jpg";
import GerryHumphreys from "./PresenterSpeakerImages/GerryHumphreys.jpg";
import PaulKennedy from "./PresenterSpeakerImages/PaulKennedy.jpg";
import RuthBagnell from "./PresenterSpeakerImages/RuthBagnell.jpg";
import JimGavin from "./PresenterSpeakerImages/JimGavin.jpg";
import EndaWalsh from "./PresenterSpeakerImages/endawalsh.jpeg";
import CaitrionaMurphy from "./PresenterSpeakerImages/CaitrionaMurphy.jpg";
import Charlie from "./PresenterSpeakerImages/Charlie.jpg";

export default function SpeakersPresentors() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
      <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Speakers and Presenters
      </h3>
      <br /><br />
      <p style={{padding: '0 5%'}}>Get ready to soar into the future of aviation at AvCon 2024! We're thrilled to introduce our dynamic duo of presenters, Ally Garvey and Karl Bowe, who will be your guides through this exhilarating journey. From the warm welcome to riveting interviews and captivating talks with esteemed guests from the aviation world, Ally and Karl will ensure an unforgettable experience. Stay tuned for announcements on our line-up of guests and talks that will keep you at the edge of your seat. Trust us, you won't want to miss the electrifying show we have in store for you.
      </p>
      <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
      <br/><br/>
      <hr/>
      <br/>
      </Box>
      <h5 style={{textAlign: 'center'}}>AvCon Presenters</h5>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} xl={6} style={{ padding: '5%' }}>
            <Speaker 
              SpeakerImage={KarlBoweImage}
              SpeakerName="Karl Bowe"
              SpeakerBio="Karl Bowe has over 10 years experience within the entertainment industry that varies from acting, modelling, hosting and presenting.
              Trained in Bull Alley, Liberties College to pursue an acting career from 2009-2013, Karl featured in some of their local productions before branching out into theatre and plays nationwide.
              In 2012, Karl joined a vocal harmony group called “Element” and made it to boot camp stages in X-Factor.
              In 2014, Karl was crowned Mr. Ireland and represented the country at that years Mr. World which was held in Torquay, England. 
              Over the years, he appeared in numerous pantos across the country as well as hosting some high profile events.
              Karl recently featured as the electrician in the “Giggly Bit” commercial for Eir broadband and is currently playing the role of “Andy” the barman in RTE's Fair City. He also does voice over work and provides the announcements on Dublin City FM."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} style={{ padding: '5%' }}>
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
      <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
        <br/>
        <hr/>
        <br/>
        </Box>
        <div style={{textAlign: 'center'}}>
          <h5>AvCon Speakers</h5>
          <Box sx={{ flexGrow: 1 }}>
            <Grid 
              style={{ padding: '3%' }}
            >
              <Grid 
                item 
                xs={12} // Full-width on extra-small screens (mobile)
                sm={12} // Full-width on small screens (tablet)
                md={6}  // Half-width on medium screens (laptops)
                lg={6}  // Half-width on large screens (desktops)
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
                  SpeakerImage={JohnDrysdale}
                  SpeakerName="John Drysdale"
                  SpeakerBio="John, Business Development Manager at Shannon Airport Group since 2017, oversees Shannon’s Aviation Services Cluster. He mentors at IASA and advises at DCU's Aviation Industry Advisory board. As Chairperson of the UAAI, he advocates for unmanned aircraft. A licensed Aircraft Engineer with a Master’s in Aviation Leadership from DCU, John is also an IAA-approved drone pilot. He represents Shannon Airport Group on the SESAR Joint Undertaking EALU-AER project and enjoys mentoring young aviators through scouting."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={JulieGarland}
                  SpeakerName="Julie Garland"
                  SpeakerBio="Julie, Founder and CEO of Avtrain, leads Europe's top drone training and consultancy firm, setting industry standards. With a diverse background including roles as an Airline Training Captain and Barrister, she is deeply involved in drone regulation and safety, serving on boards like JEDA and JARUS. Julie's accolades include recognition in the 2023 eVTOL Insights Powerbook and awards for training excellence. Avtrain specialises in drone operations, emphasizing safety and innovation, and holds approvals from the Irish Aviation Authority for comprehensive training and certifications."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={Bobby}
                  SpeakerName="Bobby Healy"
                  SpeakerBio="Bobby began his career building video games for Nintendo. He then founded Eland (an airline tech company) which he sold to SITA. He then built CarTrawler over 15 years and led two successful LBOs for the business. For the last 4 years, he’s been building ‘Manna Drone Delivery’ – a business whose mission is to improve the world by making lightning-fast suburban deliveries affordable, green and safe. He is also a founder of Meili Technology with a mission to end the fiasco of care hire brokering."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={KimMackenzieDoyle}
                  SpeakerName="Kim Mackenzie-Doyle"
                  SpeakerBio="Kim Mackenzie-Doyle is the CEO and Founder of The B!G Idea, a non-profit empowering youth to tackle global challenges. She spearheads an innovative ed tech platform linking professionals with students. With a background in product development and community engagement, Kim fosters partnerships for educational reform across Ireland. The B!G Idea promotes real-world problem-solving and creativity, earning international acclaim. Kim’s leadership aims to empower socially conscious individuals, advocating for inclusive education and inspiring youth to pursue ambitious goals."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={IanKiely}
                  SpeakerName="Ian Kiely"
                  SpeakerBio="Ian is CEO of Drone Space Ltd (Formerly Drone Consultants Ireland), a full time drone specialist with thousands of hours flying experience, developing new concepts and sensor applications. Ian and his colleagues have won many awards including The European Space Masters, received substantial research grants while working with emergency services, military organisations, government entities and The European Space Agency. Ian has been providing advice and mentoring for many years, he loves weird and wonderful ideas that challenge the norm and is a staunch advocate of protecting the planet."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={ValentinaFitzpatrick}
                  SpeakerName="Valentina Fitzpatrick"
                  SpeakerBio="Valentina began her aviation career in 2007 as a flight attendant, later transitioning to Ramp Operations in 2018, where she found a passion for ground handling. Specializing in safety-critical operations, she manages international clients and diverse aircraft, from propeller-driven planes to Boeing 777s. Valentina founded The European Aviation Wellbeing Alliance, focusing on mental health among aviation personnel, and collaborates globally to promote safety and operational excellence. Her leadership emphasizes integrity, transparency, and wellbeing in aviation."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={LorcanGeraghty}
                  SpeakerName="Lorcan Geraghty"
                  SpeakerBio="Lorcan Geraghty is a Mechanical Engineering student at Trinity College Dublin and the founder of EirSpace, Ireland's first college-level student rocket team. EirSpace is set to represent Ireland in international competitions with projects ranging from solid-propelled rockets to bi-liquid engine rockets. Lorcan advocates for increased support for student led engineering teams across Ireland where students can get real engineering experience."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={NicolaNiRiada}
                  SpeakerName="Nicola NiRiada"
                  SpeakerBio="Nicola joined the Irish Aviation Authority (now AirNav Ireland) in 1994 and has over 30 years of operational experience. She works in Shannon as an area controller and is also an OJTI, instructor, and human factors actor. Nicola serves as the IFATCA liaison officer on the IATCA Ireland board and became the IFATCA Communications Coordinator in 2023. She is part of IFATCA's Equality, Diversity and Integration Task Force and the IFATCA 2030+ TF. Nicola focuses on recruitment and promoting the ATCO career in Ireland. She holds multiple qualifications, including diplomas, degrees, and certifications in aviation, education, literature, organisational behavior, and women's studies. "
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={JaneMagill}
                  SpeakerName="Jane Magill"
                  SpeakerBio="Jane is the co-founder and Chair of Shannon Aviation Museum, established in 2008. She is passionate about preserving aviation heritage and creating an accessible facility for youth education. Jane is also the CEO of AAV Aviation Technical Services Training, developing courses with TUS Technological University and the aviation industry. She is President of Women in Aviation International - Ireland Chapter, focusing on encouraging girls and supporting women. Jane holds an EASA Private Pilot's licence and is an active member of Limerick Flying Club."
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
                  SpeakerBio="The Adventures of Capt Paddy & Lucky's mission is to spearhead initiatives to support LauraLynn Children's Hospice and Dogs Trust Ireland. Through these adventures, we not only raise awareness and funds for two vital causes, but also bring joy and inspiration to the aviation community. The team commitment to these values is at the core of every flight and every event that we organise, reflecting a passion for aviation both in the skies and on the ground. These adventures have lead our duo becoming ambassadors for Irish Aviation."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={ElaineHarding}
                  SpeakerName="Elaine Harding"
                  SpeakerBio="Elaine Harding is a pioneering tech leader in aerospace, serving as Founder and CEO of AugmentAero. She has propelled the company to the forefront of aviation innovation by integrating augmented reality (AR) and artificial intelligence (AI) into aircraft maintenance. AugmentAero enhances safety, efficiency, and profitability with advanced technology, addressing key industry challenges like safety and the need for skilled engineers. Elaine's impact is amplified by collaborations with academic and industry partners, including the University of Southampton. As an innovator and disruptor, her leadership is shaping the future of aircraft maintenance and making a significant mark on the aviation industry."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={WayneDenner}
                  SpeakerName="Wayne Denner"
                  SpeakerBio="Wayne Denner is a seasoned expert in Online Safety, Cybersecurity, Marketing, and Communications, with over 20 years of international experience. He is a respected trainer and coach, specialising in large-scale development programs that empower individuals and organisations to protect their reputations and digital assets. Wayne has collaborated with businesses across Ireland, the UK, Europe, and the Middle East, delivering in-person and remote training. As the author of 'The Student's Guide to an Epic Online Reputation...and parents too.' and a pioneer of Ireland's first social network, Wayne is a recognized thought leader in online safeguarding and youth engagement. His insights are frequently sought by media outlets and organisations, including BBC, RTE, and the Canadian Senate. Wayne's work impacts thousands annually, including 60,000 students, along with parents, educators, and professionals. He partners with a diverse range of organisations, delivering events and training that inspire responsible online behaviour and maximize digital potential."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={NealSkelton}
                  SpeakerName="Neal Skelton"
                  SpeakerBio="Neal has been at Belfast City Airport since 2002 in various roles from Ramp Operative, Catering, working with Persons with Restricted Mobility before moving into Airfield Operations. In 2014 with several other Airports, he helped develop the National Certificate Airside Operations of which we have over 500 candidates going through the system or successfully having completed the NCAO. As chair of the Aviation Special Interest Group, Neal is passionate about training and all aspects of Airside Operations in particular the safety of employees and passengers. He's looking forward to presenting at the forthcoming Avcon event and passing on any experience he has gained in this exciting industry."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={AnthonyAttoumani}
                  SpeakerName="Anthony Attoumani"
                  SpeakerBio="Anthony is a passionate and senior aeronautical engineer with over 15 years of experience in the design, development, qualification and certification of aeronautical engineering solutions. After graduating a Master Degree in Aerospace Engineering, option Avionics and Mechatronics, he commenced his career in Airbus Group as Reliability Availability Maintainability and Safety Engineer. Subsequently, Anthony progressed to management roles including Head of Design Process, and Overall Cabin Design Chief Engineer in ATR. Also, he worked on a large number of Supplemental Type Certificates going from basic cabin reconfigurations for Airlines, to complex conversions into Maritime Patrol Aircraft for MoD's. Currently, he holds the Head of the Design Organisation position at Atlantic Aviation Group (EASA.21J.540)."
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
                  SpeakerImage={PaulKennedy}
                  SpeakerName="Paul Kennedy"
                  SpeakerBio="Paul Kennedy is the Head of Aviation Infrastructure for the Irish Aviation Authority, with 30 years of aviation experience. He holds an air traffic controller's license, commercial pilot's license, and an MSc in Human Factors and Safety Assessment in Aeronautics from Cranfield University. Starting with the Irish Aviation Authority in 1994, Paul gained extensive expertise in Air Traffic Control (ATC), serving as an officer, instructor, and investigator. In 2009, he transitioned to regulation, becoming an air traffic services inspector and later managing the Air Navigation Services Division. In 2023, he was appointed Head of Aviation Infrastructure, overseeing the regulation of Air Traffic Management, Air Navigation Services, and Aerodromes. Paul chairs the ICAO European Region Aerodrome Operations Working Group and the EU National Supervisor Committee Coordination Platform. He is also Vice Chair of the ICAO North Atlantic Safety Oversight Group and has participated in EASA ATM/ANS Standardisation Inspections since 2012."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={RuthBagnell}
                  SpeakerName="Ruth Bagnell"
                  SpeakerBio="Ruth Bagnell is a key figure in Irish aviation, serving as an Airworthiness Inspector with the Irish Aviation Authority. With over two decades of experience, she began her career as an aeronautical engineer from the University of Limerick, contributing significantly to aviation engineering. Ruth's passion for aviation is evident in her obtaining a Private Pilot's License, offering her valuable insights into flight operations that enhance her role in aircraft safety and compliance. As an Airworthiness Inspector, she ensures that aircraft meet strict safety standards, a responsibility she approaches with the perspective of a pilot. In addition to her technical expertise, Ruth is skilled in Compliance and Safety Management Systems, ensuring that aviation operations adhere to rigorous regulations. Her deep knowledge of International Aviation Regulation is vital in a globally connected industry. Ruth remains active in the General Aviation community, promoting knowledge exchange and fostering industry relationships, solidifying her as a respected leader in Irish aviation."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={JimGavin}
                  SpeakerName="Jim Gavin"
                  SpeakerBio="Jim Gavin is the Chief Operations Officer of the Irish Aviation Authority. A holder of an Airline Transport Pilots License, Jim joined the Irish aviation regulator in 2011 as a Flight Operations Inspector (Airlines Standards) with his last Type Rating on the Airbus A320 family of aircraft. Since then Jim has held various management positions and regulatory roles across flight operations, airworthiness, air traffic management/air navigation services, airspace, unmanned aircraft systems (drones) and aviation security. Jim has 30 years of experience in the aviation industry and is a former Commission Officer and military pilot with 20 years of service in Óglaigh na hÉireann | The Irish Defence Forces. Jim was awarded a Doctor of Philosophy (Honoris Causa) from Dublin City University and holds a BSc (Hons) in Management and Aeronautical Studies (with 1st Class Honours) and a Diploma in Management from Dublin Institute of Technology, a Diploma in Finance from City Colleges Ireland and a Diploma in Leadership from National University of Ireland, Maynooth. Jim was also awarded the Freedom of Dublin City by the Dublin City Council."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={EndaWalsh}
                  SpeakerName="Enda Walsh"
                  SpeakerBio="Enda Walsh serves as the UAS (Unmanned Aircraft Systems) Manager at the Irish Aviation Authority (IAA), where he oversees the development and regulation of drone operations across Ireland. With a deep understanding of aviation safety and emerging technologies, Walsh plays a pivotal role in shaping the regulatory framework for UAS operations, ensuring they meet the highest safety standards while fostering innovation. In his position, Walsh is responsible for managing the safe integration of drones into Irish airspace, overseeing compliance with both national and European regulations. His work includes liaising with various stakeholders, from drone operators to commercial enterprises, to promote safe and efficient UAS usage in areas such as aerial surveying, delivery services, and emergency response. Walsh's leadership is key to navigating the fast-growing drone industry, ensuring that Ireland remains at the forefront of UAS advancements while maintaining a strong commitment to public safety and airspace management."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={CaitrionaMurphy}
                  SpeakerName="Caitriona Murphy"
                  SpeakerBio="Caitriona Murphy is an accomplished aviation professional with over 23 years of experience. She reached a significant milestone early in her career, becoming a commander at just 24. Since 2001, Caitriona has held key positions at Aer Arann, Stobart Air, and Emerald Airlines, serving as First Officer, Captain, Line Training and Check Captain, TRI, TRE, and Chief Pilot. She has accumulated over 9,000 flight hours on ATR turboprops and Embraer jets, along with 2,000 hours instructing and examining commercial pilots. During her tenure, Caitriona successfully integrated Embraer aircraft onto the Stobart Air AOC and managed training for London City Steep Approach operations. As Chief Pilot and Fleet Manager, she led several operational improvements, including the introduction of Electronic Flight Bags (EFB) for the Embraer fleet. Most recently, Caitriona began her dream role as a Flight Operations Inspector with the Irish Aviation Authority, where she remains dedicated to advancing within the aviation sector, developing new skills, and embracing challenges in her field."
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4} xl={4} style={{ padding: '3%' }}>
                <Speaker 
                  SpeakerImage={Charlie}
                  SpeakerName="Charlie O'Neill"
                  SpeakerBio="Charlie O'Neill is currently the Chairperson of the renowned Irish Aviation Students Association (IASA) and in her final year of studying Aviation Management at Dublin City University to graduate in 2025. The Irish Aviation Students' Association (IASA) is a non-profit organization aimed at supporting and connecting students and young professionals interested in the aviation and aerospace industries in Ireland. Founded by students for students, IASA provides a platform for networking, learning, and career development in these fields, and works to bridge the gap between education and employments in the flourishing Irish aviation industry."
                />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
          <br/>
          <hr/>
          <br/>
        </Box>
        <p style={{padding: '0 5%', textAlign: 'center'}}>Calling all educators! Secure your school's free tickets now, as individual tickets are not available at this time.
          <br/> Register your education group <a href="/BookTickets"><u>HERE</u></a> and get ready for a flight of inspiration and innovation on November 7th at Casement Aerodrome, Baldonnel, co. Dublin.
        </p>
      </main>
    );
  }
  