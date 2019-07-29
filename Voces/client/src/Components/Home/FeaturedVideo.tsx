import React from 'react';
import '../../CSS/Featured.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function FeatureVideo() {
  return (
    <div className="videoFeatured">
      <div className="vid-feature-content">
        <h1>Tomado en el borde</h1>
        <em>Un vidéo sobre el estado de la inmigración en los EEUU</em>
        <p>Los migrantes en México enfrentan secuestros y violencia mientras esperan audiencias de inmigración en los EE. UU</p>
        <Link className="link-white" to='/videos#vid'><strong>>> Ver Más >></strong></Link>
      </div>
      {/* <h1>Featured Video</h1> */}
    </div>
  )
}