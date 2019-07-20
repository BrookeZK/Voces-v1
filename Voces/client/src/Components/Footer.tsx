import React from 'react';
import '../CSS/Footer.css';

export default function Footer() {
  return (
    <div>
      <div className="content-container"> 
        <div  className="footer-links">
          <div id="about-blurb"> 
            <p>Voces de la comunidad</p>
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