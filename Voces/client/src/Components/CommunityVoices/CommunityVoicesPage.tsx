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
           
          </div>
        </div>
        <div id="vid" className="videoViewer">
          <VideoCommunity />
        </div>
        <Collaborate />
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>  
  )
}