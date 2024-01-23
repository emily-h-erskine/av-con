import React from "react";

export default function FlightSimImageBanner() {
  const bannerStyles = {
    position: 'relative',
    padding: '0% 2% 5% 2%',
    width: '100%',
  };

  const imageStyles = {
    position: 'relative',
    zIndex: '-1',
    width: '100%',
    mixBlendMode: 'luminosity',
  };

  const overlayStyles = {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    mixBlendMode: 'darken',
    background: 'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0) 100%)',
  };

  const contentStyles = {
    width: '70%',
    height: 'auto',
    left: '5%',
    top: '2%',
    position: 'absolute',
    fontSize: '35px',
    fontWeight: '800',
    textAlign: 'left',
    color: 'white',
  };
  const mediaQueryStyles = {
    '@media only screen and (max-width: 600px)': {
      width: '90%',
      fontSize: '20px',
      left: '5%',
    },
    '@media only screen and (min-width: 601px) and (max-width: 768px)': {
      width: '80%',
      fontSize: '25px',
      left: '4%',
    },
    '@media only screen and (min-width: 769px) and (max-width: 992px)': {
      width: '70%',
      fontSize: '30px',
      left: '3%',
    },
    '@media only screen and (min-width: 993px)': {
    },
  };

  const responsiveStyles = {
    ...bannerStyles,
    ...mediaQueryStyles,
  };

  return (
    <div style={responsiveStyles}>
      <img
        src="https://careers.ryanair.com/wp-content/uploads/2019/01/Engineering-Lead-Image.jpg"
        alt="header image"
        style={imageStyles}
      />
      <div style={overlayStyles} />
      <div style={contentStyles}>
        AvCon Xtra promises an unforgettable experience for aviation enthusiasts and competitive gamers alike. So, assemble your dream team, fundraise for a fantastic cause, and prepare for a
        12-hour flight simulation adventure like no other!
      </div>
    </div>
  );
}
