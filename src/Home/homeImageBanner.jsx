import React from "react";

export default function HomeImageBanner() {
  return (
    <div style={{position: 'relative', padding: '0% 2% 5% 2%'}}>
        <img src="https://cdn.britannica.com/41/123141-050-E6229449/Air-New-Zealand-Boeing-747-400.jpg" alt="header image" style={{position: 'relative', zIndex:' -1', width:'100%'}}/>
        <button type="button" name="Register Button" style={{padding: '20px 50px 20px 50px', position: 'absolute', right:'10%', top:'40%'}}><a href="./Register"><b>Register Now</b></a></button>
    </div>
  );
}
