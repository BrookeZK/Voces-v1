import React from 'react';
import NavHome from '../NavHome';
import HeaderHomePage from './HeaderHomePage';
import '../../CSS/Home.css';
import FeaturedEditorial from './FeaturedEditorial';
import FeaturedNews from './FeaturedNews';
import FeaturedVideo from './FeaturedVideo';
import FeaturedVoices from './FeaturedVoices';
import Footer from '../Footer';

export default function Home() {
  return (
    <div className="main-content">
      <div id="content-wrapper">
        <HeaderHomePage />
        <div className="navMargin">
          <NavHome />
        </div>
        <div className="wrapper">
          <div className="featured-editorial">
            <FeaturedEditorial />
          </div>
          <div className="featured-videos">
            <FeaturedVideo />
          </div>
          <div className="featured-voices">
            <FeaturedVoices />
          </div>
          <div className="featured-news">
            <FeaturedNews />
          </div>
        </div>
      </div>  
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}