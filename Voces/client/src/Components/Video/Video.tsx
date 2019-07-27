import React from 'react';
import '../../CSS/VideoPage.css';
import ReactPlayer from 'react-player';

export default function Video() {
  return (
    <div>
      <div>
        <ul className="videoNav">
          <li>Inmigración</li>
          <li>Protesta</li>
          <li>Celebracion</li>
          <li>Resistencia</li>
          <li>Arte</li>
        </ul>
      </div>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://vimeo.com/300390166'
            width='100%'
            height='93vh'
          />
        </div>
      </div>
  )
}