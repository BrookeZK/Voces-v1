import React from 'react';
import '../CSS/NavHeader.css';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/Search-Icon.png';

export default function NavHome() {
  return (
    <div>
      <div className="infoNav">
        <div id="left2">
          <ul>
            <li>
              <input type="text" placeholder="haz una búsqueda..." className="searchBar" />
            </li>
            <li>
              <img src={searchIcon} width="18px" height="18px;" alt="search" />
            </li>
          </ul>
        </div>
        <div className="date">
          <li id="date">Viernes 26 de Julio, 2019</li>
        </div>
        <div id="right2">
          <ul>
            <li><span>Español</span> | <span>English</span></li>
          </ul>
        </div>
      </div>  
      <div className="pageLinks">
        <ul>
          <li><Link className="link" to="/editorial">Editoriales</Link></li>
          <li><Link className="link" to="/videos">Vidéos</Link></li>
          <li><Link className="link" to="/tu-voz">Tú Voz</Link></li>
          <li><Link className="link" to="/noticias">Notícias</Link></li>
          <li><Link className="link" to="/cartas-a-la-editora">Cartas a la Editora</Link></li>
          <li><Link className="link" to="/quienes-somos">¿Quiénes Sómos?</Link></li>
        </ul>
      </div>
    </div>
  )
}