import React from 'react';
import Nav from './Nav';
import HeaderHomePage from './HeaderHomePage';
import '../CSS/Home.css';
import FeaturedEditorial from './FeaturedEditorial';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <HeaderHomePage />
      <Nav />
      <div className="wrapper">
        <div className="featured-editorial">
          <FeaturedEditorial />
        </div>
        <div className="featured-videos">
          <FeaturedEditorial />
        </div>
        <div className="featured-opinion">
          <FeaturedEditorial />
        </div>
        <div className="featured-news">
          <FeaturedEditorial />
        </div>
      </div>
    </div>
  )
}