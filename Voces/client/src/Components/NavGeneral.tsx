import React from 'react';
import '../CSS/NavHeader.css';
import { Link } from 'react-router-dom';

export default function NavGeneral() {
  return (
    <div>
      <div className="smallNavHeader">
        <div id="left">
          {/* <ul>
            <li id="explore"><a href="#">Explore</a></li>
            <li id="creator"><a href="#">I'm a creator</a></li>
          </ul> */}
        </div>
        <li id="logo"><Link to='/' className="link"><span className="logofont1">V</span><span className="logofont2"><strong>oces</strong></span></Link></li>
        <div id="right">
          {/* <ul>
            <li id="search"><a href="#">Search</a></li>
            <li id="signIn"><a href="#">Sign in</a></li>
          </ul> */}
        </div>
      </div>  
      <div className="pageLinks">  
        <ul>
          <li><Link className="link" to="/editorial">Editoriales</Link></li>
          <li><Link className="link" to="/videos">Vidéos</Link></li>
          <li><Link className="link" to="/tu-voz">Voces de la Communidad</Link></li>
          <li><Link className="link" to="/noticias">Notícias</Link></li>
          <li><Link className="link" to="/cartas-a-la-editora">Cartas a la Editora</Link></li>
          <li><Link className="link" to="/quienes-somos">¿Quiénes Sómos?</Link></li>
        </ul>
      </div>
    </div>
  )
}