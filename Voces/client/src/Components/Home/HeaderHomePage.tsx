import React from 'react';
import '../../CSS/NavHeader.css';
import { Link } from 'react-router-dom';

export default function HeaderHomePage() {
  return (
    <div className="header">
        <p><Link to='/' className="link"><span className="title1">V</span><span className="title2">oces</span></Link></p>
    </div>
  )
}