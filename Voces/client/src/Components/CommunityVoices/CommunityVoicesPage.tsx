import React from 'react';
import NavGeneral from '../NavGeneral';
import Footer from '../Footer'
import Collaborate from '../Collaborate/Collaborate';
import VideoCommunity from './VideoCommunity';

export default function CommunityVoicesPage() {
  return (

    <div className="main-content">
      <div id="content-wrapper">
        <NavGeneral />
        <div className="voices">
          <div>
            {/* <h1><em>¡Te ecuchamos!</em></h1>
            <h2>Aqui la voz de los líderes y miembros de la communidad latinx. Explora los videos. Deja su commentario. Discute los temas que importa.</h2> */}
          </div>
        </div>
        <div id="vid" className="comVideoViewer">
          {/* <VideoCommunity /> */}
        </div>
        <Collaborate />
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>  
  )
}