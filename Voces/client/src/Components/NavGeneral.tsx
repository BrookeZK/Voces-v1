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
          <li className="link"> Voces de la Communidad</li>
          <li className="link" >Notícias</li>
          <li className="link">Cartas a la Editora</li>
          <li className="link">¿Quiénes Sómos?</li>
        </ul>
      </div>
    </div>
  )
}