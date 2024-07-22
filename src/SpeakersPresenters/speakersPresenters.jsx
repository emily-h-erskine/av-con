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
                SpeakerBio='"Ladies and Gentlemen,

                Good afternoon, as the General Officer Commanding the Air Corps I want to welcome you to this momentous occasion, the hosting of the Aviation Convention by the Irish Air Corps this November. It is an honor and a privilege to celebrate and explore the dynamic world of aviation and for the Irish Air Corps to welcome everyone to our base and home. This convention represents a significant milestone, not only for the Irish Air Corps but also for the students, schools, and the wider community involved.

                The Irish Air Corps has a long-standing tradition of excellence, courage, and innovation. As we host this prestigious event, we are reminded of our rich history and our commitment to fostering the future of aviation. This convention is more than just a gathering of aviation professionals; it is a beacon of inspiration for the next generation of aviators, engineers, and innovators.
                
                We are incredibly fortunate to have a stellar lineup of guest speakers who will share their invaluable insights and experiences with us. Among them are aero engineers, pilots, technicians and Air Traffic Controllers to name few from the Air Corps who will share their exciting career stories. Their presence here today underscores the importance of collaboration, knowledge-sharing, and mentorship in our industry. They bring with them a wealth of experience, stories of perseverance, and a vision for the future of the States new Air Force that will undoubtedly leave a lasting impact on all of us.
                
                For the students and schools participating in this convention, this is an unparalleled opportunity. It is a chance to learn from the best, to engage with cutting-edge technology, and to envision a future where their dreams take flight. The hands-on workshops, interactive exhibits, and panel discussions have been designed to ignite curiosity and foster a deep-seated passion for aviation.
                
                Students will have the chance to explore various aspects of aviation, from piloting and navigation to aerospace engineering and air traffic control. They will witness firsthand the dedication and precision required in this field, and they will be encouraged to pursue their aspirations with determination and confidence.
                
                Schools participating in this convention are providing their students with a unique platform to expand their horizons and to connect with industry leaders. This engagement not only enhances their educational experience but also opens doors to future career opportunities. By immersing themselves in this environment, students will develop a greater understanding of the diverse career paths available in aviation and the importance of STEM (Science, Technology, Engineering, and Mathematics) education in achieving their goals.
                
                In closing, I would like to express my heartfelt gratitude to the organisers, sponsors, guest speakers, and all the participants who have made this convention possible. Your dedication and support are instrumental in making this event a success. To the students and schools, I encourage you to make the most of this opportunity, to ask questions, to explore, and to dream big.
                
                I began my aviation career in 1982 as an apprentice here in Baldonnel and now as Brigadier General I am the General Officer Commanding the Air Corps; the sky is not the limit; it is just the beginning. Let this convention be the launchpad for your future in aviation. Thank you, and enjoy the convention!" - Rory OConnor'
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
  