import React from "react";

export default function HomeImageBanner() {
  return (
    <div style={{position: 'relative', padding: '0% 2% 5% 2%'}}>
        <img src="https://cdn.britannica.com/41/123141-050-E6229449/Air-New-Zealand-Boeing-747-400.jpg" alt="header image" style={{position: 'relative', zIndex:' -1', width:'100%' }}/>
        <div style={{width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', mixBlendMode: 'darken', background: 'linear-gradient(180deg, #07101D 0%, rgba(7, 16, 29, 0) 100%)'}} />
        <button type="button" name="Register Button" style={{padding: '20px 50px 20px 50px', position: 'absolute', right:'10%', top:'30%'}}><a href="./Register"><b>Register Now</b></a></button>

        <div style={{width: 1051, height: 256, left: 50, top: 40, position: 'absolute', fontSize: 90, fontWeight: '800'}}>Welcome to the Future of Aviation! </div>
    </div>
  );
}
