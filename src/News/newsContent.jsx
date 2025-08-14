import React from 'react';
import NewsArticle from './NewsArticle/newsArticle';

const NewsContent = () => {
  return (
    <>
      <NewsArticle
        title="🛫 Four Students Set to Fly in ‘Dare 2 Dream’ Challenge"
        summary={[
          "Four Irish secondary school students will soon take to the skies after completing the Dare 2 Dream Challenge, a collaboration between AFTA (Atlantic Flight Training Academy), Pilot Path Group, and TYHub.ie.",
          "Chosen from over 90 applicants, each raised €250 for the SkyBound Fund—a student-led initiative helping schools cover transport costs so more young people can attend educational events such as AvCon.",
        ]}
        fullContent={[
          "Their flights take place in early September, but the real challenge is now to the aviation and aerospace industry: with AvCon 2025 – The Future of Aviation & Aerospace set for October 2nd and 8,000+ students already registered, organisers are calling on companies to advertise, exhibit, speak, or attend the exclusive AvCon Afterburner B2B event to help inspire the next generation."
        ]}
        email="hello@avcon.ie"
        tags="#Dare2Dream #AvCon2025 #SkyBoundFund #YouthInAviation #FutureOfFlight #STEM #PilotPath"
      />
      <NewsArticle
        title="🎉 AvCon – The Future of Aviation Has Officially Launched! 🚀"
        summary={[
          "A massive thank you to everyone who joined and supported the launch of our exciting initiative to inspire 6,000 students at The Irish Air Corps on November 7th. We are thrilled to announce that we will also livestream the event to over 600 schools across Ireland and Northern Ireland. Aviation enthusiasts can also tune in via YouTube and LinkedIn with TY Hub. 🌍 ✈️",
          "✨ A big thank you to AirNav Ireland & the Irish Aviation Authority for co-hosting our official launch on August 29th in the beautiful Atrium of The Times Building. Special thanks to Aviation Skillnet for sponsoring the fabulous refreshments.",
          "📣 A heartfelt thank you to Irish Air Corps’ Rory O'Connor, and to our incredible contributors: John Drysdale, Jane Magill, Kumar Kaneswaran, Linda Barron, Julie Garland, Alec Elliott, Declan Fitzpatrick, Valentina Fitzpatrick, the IAA, and our media partner O'Doherty's Audio Visual. Huge thanks also to Team AvCon—this wouldn’t be possible without you!",
        ]}
        fullContent={[
          "We're also grateful to Minister for Transport, James Lawless, for his support for #AvCon and for speaking at the event. Thank you to the brilliant speakers, Dr. Peter Kearney & David Hodnett, and to everyone who attended our inaugural event. 🚀",
          "🚁 The atmosphere at the launch was electric, with career pathways ranging from the ground to outer space. We're certain this will inspire a new generation to dream big and reach beyond limits. The future of aviation is here—and it’s exciting! 🌍",
          "Join us again on November 7th, 2024, at The Irish Air Corps in Casement Aerodrome, Baldonnel, Co. Dublin, as we take another leap forward in shaping the future of aviation. 🛫"
        ]}
        tags="#FutureOfAviation #IrishAirCorps #Careers #STEM #Aerospace #TYHub #Inspiration #NextGen #FIA2024"
        galleryLink="https://drive.google.com/drive/folders/1-ZtmuTUVVbTEN2QhP6FGuGRoJ2JmjxME?usp=share_link"
        email="hello@avcon.ie"
      />
    </>
  );
};

export default NewsContent;
