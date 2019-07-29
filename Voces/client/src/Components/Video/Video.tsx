import React, { Component } from 'react';
import '../../CSS/VideoPage.css';
import ReactPlayer from 'react-player';
import immigration from '../../assets/immigration-vid.png';

// const MULTIPLE_SOURCES = [
//   { src: 'https://vimeo.com/300390166' },
// ]

class Video extends Component<any, any> {

  constructor(props: any) {
    super(props); 
    this.state = {
      url: '',
      pip: false,
      playing: false,
      controls: false,
      light: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
      hideImg: false
    }
    this.hideImage = this.hideImage.bind(this);
    this.load = this.load.bind(this);
    this.playPause = this.playPause.bind(this);
    this.load('https://vimeo.com/300390166');
  }

  load = (url: any) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  // ref = (player: any) => {
  //   this.player = player
  // }

  hideImage() {
    let image: any = document.getElementById("videoImage");
    let video: any = document.getElementById("hiddenVid");
    image.classList.toggle("hide");
    video.classList.remove("hide");
    this.setState({ playing: !this.state.playing })
  }
  

  render() {
    console.log(this.state);
    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    const SEPARATOR: string = ' · '
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
        <div id="videoImage" onClick={this.hideImage}>
          <img src={immigration} alt="state of immigration video" width='100%' height='100%'/>
        </div>
        <div id="hiddenVid" className="hide">
          <div className='player-wrapper'>
            <ReactPlayer
              // ref={this.ref}
              className='react-player'
              url='https://vimeo.com/300390166'
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              width='100%'
              height='93vh'
            />
          </div>
        </div>
      </div>
    )

  }
}

export default (Video)