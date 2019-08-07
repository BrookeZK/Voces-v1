import React from 'react';
import '../../CSS/NavHeader.css';
import { Link } from 'react-router-dom';
import logoLarge from '../../assets/voces-logo-large.png';

export default function HeaderHomePage() {
  return (
    <div className="header">
      <p><Link to='/'><img src={logoLarge} alt="voces logo"/></Link></p>
    </div>
  )
}