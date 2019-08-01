import React from 'react';
import '../../CSS/Featured.css';

export default function FeatureNews() {
  const readability = {
    backgroundColor: "rgba(255, 255, 255, 0.5",
    alignItems: "center"
  }

  return (
    <div className="newsFeatured">
      <h1>En Las Noticias</h1>
      <div className="newsGrid">
        <div className="news1">
          <h1 style={readability}>Kelly Craft, Trump Nominee for U.N. Ambassador, Confirmed by Senate</h1>
        </div>
        <div className="news2 overflow">
          <h2>Seesaws Straddle the Mexico Border, and Smiles Shine Through</h2>
          <h3>The playground equipment was inserted through the steel slats in a section of border wall in Sunland Park, N.M.</h3>
          <img  src="https://static01.nyt.com/images/2019/07/30/us/30SEESAW/merlin_158600403_fca7755a-22c9-41de-b485-0c222697a1f3-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news3 overflow">
          <h2>No More Family Separations, Except These 900</h2>
          <h3>Separations of migrant families are continuing in substantial numbers, often for reasons as simple as a parent with a traffic ticket, the American Civil Liberties Union reported.</h3>
          <img  src="https://static01.nyt.com/images/2019/07/30/us/30FAMILY-SEPARATIONS/merlin_153075219_9e18180e-b93e-425b-8f6f-223e9bb72db1-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news4 overflow">
          <h1 style={readability}>F.B.I. Agents Raid South Bend Housing Authority Offices</h1>
        </div>
        <div className="news5 overflow">
          <h1 style={readability}>Guns Across Borders: California Has Strict Laws, but Nevada Doesn’t</h1>
        </div>
        <div className="news6 overflow">6</div>
        <div className="news7 overflow">7</div>
        <div className="news8 overflow">8</div>
        <div className="news9 overflow">9</div>
        <div className="news10 overflow">10</div>
      </div>
    </div>
  )
}

// e r
// d r
// d f
// g m
// h m
// h z
// x z
// x c