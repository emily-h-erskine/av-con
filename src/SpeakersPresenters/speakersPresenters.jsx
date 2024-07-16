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

export default function SpeakersPresentors() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
      <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Speakers and Presenters
      </h3>
      <br /><br />
      <p style={{padding: '0 5%'}}>Get ready to soar into the future of aviation at AvCon 2024! We're thrilled to introduce our dynamic duo of presenters, Ally Garvey and Karl Bowe, who will be your guides through this exhilarating journey. From the warm welcome to riveting interviews and captivating talks with esteemed guests from the aviation world, Ally and Karl will ensure an unforgettable experience. Stay tuned for announcements on our line-up of guests and talks that will keep you at the edge of your seat. Trust us, you won't want to miss the electrifying show we have in store for you.
        <br /><br />
      </p>
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
      <div style={{textAlign: 'center'}}>
        <h5>AvCon Speakers</h5>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6} xl={6} style={{ padding: '3%' }}>
            <Speaker 
              SpeakerImage={JulieGarland}
              SpeakerName="Julie Garland - Founder and CEO of Avtrain."
              SpeakerBio="Julie is the Founder and CEO of Avtrain - one of Europe's leading drone training and consultancy organisations setting the standards for others to follow. She is a former Airline Training Captain, Aircraft Maintenance Engineer, Barrister at Law and Fellow of the Chartered Institute of Arbitrators and President of JEDA- Joint European Drone Associations; prior to undertaking her position as CEO of Avtrain she was the Director Compliance for Norwegian Air International . She is the founding and current Vice-Chair of the Unmanned Aircraft Association of Ireland and sits on the Board of Directors of JEDA as the Irish representative and is the JEDA representative on JARUS – the Joint Authorities for Rulemaking on Unmanned Systems where she is Vice-Chair of the JARUS Industry Stakeholder's Body Steering Committee. She also a member of the Board of Advisors for the Estonian Aviation Academy (EAVA), the Ireland Liaison for the Advanced Air Mobility Institute and is a Royal Aeronautical Society Mentor for aspiring aviators. Julie has been the recipient of many awards and accolades including being listed in the 2023 eVTOL Insights Powerbook and winning Airwards Training & Certification Organisation along with multiple podcasts such a Jarlath Regan, The Flying Irishman and Jo Moses, Formidable Females of Future Flight.
              Avtrain's mission is to encourage prolific drone operations and keep the skies safe through the highest standards of training and certification. They hold an approval as Recognised Entity issued by the Irish Aviation Authority for the grant of EASA Open A2 and STS-01/02 Theoretical Knowledge Examinations and Practical Skill Training and Assessments for STS-01/02. We also work with clients for all Specific Category Authorisations, Declarations & Light UAS operator Certificate (LUC) and third party independent verification of compliance with Operational Safety Objectives.
              Avtrain live by the 3D's - If it is Dull, Dirty or Dangerous then a drone should be doing it. Avtrain is a consortium member of Future Mobility Campus Ireland Air with Shannon Airport Group where they are pushing the boundaries in autonomy, Advanced Air Mobility and eVTOL Pilot Training."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} style={{ padding: '3%' }}>
            <Speaker 
              SpeakerImage={JohnDrysdale}
              SpeakerName="John Drysdale"
              SpeakerBio="John joined the Shannon Airport Group in 2017 as Business Development Manager heading up Shannon’s Aviation Services Cluster. He is the industry mentor on the Industry Advisory Committee for the Irish Aviation Students Association (IASA) and also sits on the Aviation Industry Advisory board at Dublin City University (DCU). He has been a long-standing member of the industry steering committee for the ICBE Aviation Skillnet and was recently appointed the Chairperson of the Unmanned Aircraft Association of Ireland, the UAAI. John has a passion for aviation and is an EASA Part 66 licensed Aircraft Engineer. and recently graduated from Dublin City University with a Master’s degree in Aviation Leadership. He is an active IAA-approved drone pilot and represents the Shannon Airport Group on the SESAR Joint Undertaking EALU-AER project, a digital sky demonstrator with Future Mobility Campus Ireland. In his spare time, John flies high-performance radio-controlled helicopters and aircraft; he is an active scout leader with Shannon Scouts and loves sharing aviation with young people when and wherever he can."
              />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} style={{ padding: '3%' }}>
            <Speaker 
              SpeakerImage={Bobby}
              SpeakerName="Bobby Healy"
              SpeakerBio="Bobby began his career building video games for Nintendo. He then founded Eland (an airline tech company) which he sold to SITA. He then built CarTrawler over 15 years and led two successful LBOs for the business. For the last 4 years, he’s been building ‘Manna Drone Delivery’ – a business whose mission is to improve the world by making lightning-fast suburban deliveries affordable, green and safe. He is also a founder of Meili Technology with a mission to end the fiasco of care hire brokering."
              />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} style={{ padding: '3%' }}>
            <Speaker 
              SpeakerImage={KimMackenzieDoyle}
              SpeakerName="Kim Mackenzie-Doyle"
              SpeakerBio="Kim Mackenzie-Doyle is the CEO and Founder of The B!G Idea, a pioneering non-profit organisation dedicated to empowering young people to tackle local and global challenges. With a passion for bridging the gap between industry and education, she has led a diverse team to successfully created an innovative ed tech platform that enables professionals from various fields to support and mentor students online.

              Kim's career is marked by a relentless drive for social impact and educational reform. Prior to founding The B!G Idea, she held significant roles in the creative sector, where she honed her skills in product development, leadership, strategic planning, and community engagement. Her visionary approach has been instrumental in forging strong partnerships across borders, ensuring that young people on the island of Ireland receive the support and resources they need to thrive.
              
              Under her leadership, The B!G Idea has garnered international recognition for its unique approach to education, focusing not just on academic success but also on real-world problem-solving and creativity. Kim’s dedication to fostering a generation of socially conscious and empowered individuals is evident in every aspect of her work.
              
              She is not only a leader but also an advocate for change, tirelessly working to create a more inclusive and innovative educational landscape. Her efforts have inspired countless young people to dream big and pursue their goals with confidence and resilience."
              />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6} style={{ padding: '3%' }}>
            <Speaker 
              SpeakerImage={IanKiely}
              SpeakerName="Ian Kiely"
              SpeakerBio="Ian is CEO of Drone Space Ltd (Formerly Drone Consultants Ireland), a full time drone specialist with thousands of hours flying experience, developing new concepts and sensor applications.

              Ian and his colleagues have won many awards including The European Space Masters, received substantial research grants while working with emergency services, military organisations, government entities and The European Space Agency.
              
              Ian has been providing advice and mentoring for many years, he loves weird and wonderful ideas that challenge the norm and is a staunch advocate of protecting the planet."
              />
          </Grid>
        </Grid>
        </Box>
        </div>
        <br/>
        <p style={{padding: '0 5%', textAlign: 'center'}}>Calling all educators! Secure your school's free tickets now, as individual tickets are not available at this time.
          <br/> Register your education group <a href="/BookTickets"><u>HERE</u></a> and get ready for a flight of inspiration and innovation on November 7th at Casement Aerodrome, Baldonnel, co. Dublin.
        </p>
      </main>
    );
  }
  