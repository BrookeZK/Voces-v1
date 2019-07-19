import React from 'react';
import Nav from './Nav';
import HeaderHomePage from './HeaderHomePage';
import '../CSS/Home.css';
import FeaturedEditorial from './FeaturedEditorial';

export default function Home() {
  return (
    <div>
      <HeaderHomePage />
      <Nav />
      <div className="container">
        <FeaturedEditorial />
        <FeaturedEditorial />
      </div>
    </div>
  )
}