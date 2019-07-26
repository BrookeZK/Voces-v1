import React from 'react';
import '../CSS/NavHeader.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <div className="myNav">
        <ul>
          <li><Link className="link" to="/editoriales">Editoriales</Link></li>
          <li><Link className="link" to="/vidéos">Vidéos</Link></li>
          <li><Link className="link" to="/voces-de-la-communidad">Voces de la Communidad</Link></li>
          <li><Link className="link" to="/notícias">Notícias</Link></li>
          <li><Link className="link" to="/cartas-a-la-editora">Cartas a la Editora</Link></li>
          <li><Link className="link" to="/quiénes-sómos">¿Quiénes Sómos?</Link></li>
        </ul>
      </div>
    </div>
  )
}