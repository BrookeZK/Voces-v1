import React from 'react';
import '../CSS/NavHeader.css';
import { Link } from 'react-router-dom';
import smallLogo from '../assets/voces-logo-small.png'

export default function NavGeneral() {
  return (
    <div id="nav">
      <div className="smallNavHeader">
        <div id="left">
        </div>
          <li id="logo"><Link to='/'><img src={smallLogo} alt="voces logo"/></Link></li>
        <div id="right">
        </div>
      </div>  
      <div className="pageLinks">  
        <ul>
          <li><Link className="link" to="/editorial">Editorial</Link></li>
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