import React from 'react';
import '../CSS/Footer.css';

export default function Footer() {
  return (
    <div>
      <div> 
        <div  className="footer-links">
          <div id="about-blurb"> 
            <p><span className="title1sm">V</span><span className="title2sm">oces</span></p>
          </div>
          <div id="link-column">
          </div>
        </div>
        <div className="copyright">
          <div id="terms">
            <p>Terms & Conditions</p>
            <p>© Voces-USA. All rights reserved.</p>
          </div>
          <div id="signup">
            <input id="email" type="text" placeholder="suscríbase" />
          </div>
        </div>
      </div>
    </div>
  )
}