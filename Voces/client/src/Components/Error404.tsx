import React from 'react';
import '../CSS/Error.css';
import Footer from './Footer';
import NavGeneral from './NavGeneral';

export default function Error404() {
  return (
    <div>
      <div className="main-content">
      <div id="content-wrapper">
\       <NavGeneral />
        <div className="wrapper error">
            <h1>¡Error! La página que busques no existe.</h1>
        </div>
      </div>  
      <div id="footer">
        <Footer />
      </div>
    </div>
  </div>  
  )
}