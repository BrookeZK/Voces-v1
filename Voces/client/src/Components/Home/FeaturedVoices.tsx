import React from 'react';
import '../../CSS/Featured.css';

export default function FeaturedVoices() {
  const pink = {
    color: 'rgb(207, 142, 208)'
  }

  // rgb(243, 171, 244)
  const black = {
    color: 'black'
  }

  const orange = {
    color: 'orange'
  }

  const green = {
    color: 'rgb(33, 65, 20)'
  }

  const background1 = {
    backgroundColor: 'rgb(255, 255, 255, 0.5)'
  }

  const background2 = {
    backgroundColor: 'rgb(0, 0, 0, 0.5)'
  }

  const background3 = {
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    color: 'rgb(207, 142, 208)'
  }

  return (
    <div className="voicesFeatured">
      <h1><em><strong>| | | Tú Voz</strong></em></h1>
      <div className="feature-voices-flex">
        <div className="featureVoice1">
          <h2><span className="name-highlight" style={pink}>Natalia</span> conoce su gente.</h2>
          <div className="featuredTagLine">
            <h3 style={background2}>"El sueño vive". Su historia creando un espacio communal de arte latinx.</h3>
            <h3 style={pink}>>> Mira el vidéo >></h3>
          </div>
        </div>
        <div className="featureVoice2">
          <h2 className="name-highlight2" style={green}>Latino<br></br> Magico</h2>
          <div className="featuredTagLine2">
            <h3 style={background1}>Martin Allais discute sus raices multiculturales, la fuerza de una identidad fronteriza, y su arte.</h3>
            <h3 style={green}>>> Mira el vidéo >></h3>
          </div>
        </div>
      </div>
    </div>
  )
}