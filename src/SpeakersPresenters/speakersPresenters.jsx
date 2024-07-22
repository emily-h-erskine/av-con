import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Speaker from "./speaker";
import KarlBoweImage from './PresenterSpeakerImages/KarlBowe.jpeg';
import AllyGarvey from './PresenterSpeakerImages/Ally.JPG';
import JulieGarland from './PresenterSpeakerImages/JudieGarland.png';
import JohnDrysdale from './PresenterSpeakerImages/JohnDrysdale.jpg';
import Bobby from './PresenterSpeakerImages/Bobby.png';
import KimMackenzieDoyle from './PresenterSpeakerImages/KimMackenzieDoyle.png';
import IanKiely from './PresenterSpeakerImages/IanKiely.JPG';
import ValentinaFitzpatrick from './PresenterSpeakerImages/ValentinaFitzpatrick.png';
import GOC from './PresenterSpeakerImages/GOC.jpg'
import GOCHighlight from "./GOCHighlight";
import LorcanGeraghty from "./PresenterSpeakerImages/LorcanGeraghty.jpeg"

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
            <Grid container spacing={1} style={{ padding: '3%' }}>
              <GOCHighlight 
                SpeakerImage={GOC}
                SpeakerName="GOC Rory O'Connor"
                SpeakerBio={`"Ladies and Gentlemen, good afternoon. As the General Officer Commanding the Air Corps, I welcome you to this momentous occasion: the hosting of the Aviation Convention by the Irish Air Corps this November. It's an honor to celebrate and explore aviation here at our base. This convention is significant not just for the Irish Air Corps, but also for the students, schools, and broader community involved. The Irish Air Corps prides itself on a tradition of excellence, courage, and innovation. This event is a beacon of inspiration for the next generation of aviators, engineers, and innovators. We are privileged to have a stellar lineup of guest speakers, including aero engineers, pilots, technicians, and Air Traffic Controllers from the Air Corps, who will share their career stories and insights. Their presence underscores the importance of collaboration, knowledge-sharing, and mentorship in our industry. For the students and schools, this convention is a unique opportunity to learn from the best, engage with cutting-edge technology, and envision a future where their dreams take flight. The hands-on workshops, interactive exhibits, and panel discussions are designed to ignite curiosity and foster a passion for aviation. Students will explore various aspects of aviation, from piloting and navigation to aerospace engineering and air traffic control, witnessing firsthand the dedication and precision required in this field. Schools participating in this event provide their students with a platform to expand their horizons and connect with industry leaders, enhancing their educational experience and opening doors to future career opportunities. This engagement fosters a greater understanding of diverse career paths in aviation and highlights the importance of STEM education. In closing, I express my heartfelt gratitude to the organizers, sponsors, guest speakers, and all participants. Your dedication is key to this event's success. To the students and schools, seize this opportunity to ask questions, explore, and dream big. Starting my aviation career as an apprentice in 1982 and now as Brigadier General, I believe the sky is just the beginning. Let this convention launch your future in aviation. Thank you, and enjoy the convention!" - Rory O'Connor`}
              />
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
  