import * as React from 'react';
import ReactPlayer from 'react-player';

class VideoCommunity extends React.Component<any, any> {

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
    this.load = this.load.bind(this);
    this.playPause = this.playPause.bind(this);
    this.load('https://player.pbs.org/viralplayer/2365840894/');
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

  render() {
    console.log(this.state);
    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    const SEPARATOR: string = ' · '
    return (
      <div>
        <div className='player-wrapper'>
          <ReactPlayer
            // ref={this.ref}
            className='react-player'
            url='https://player.pbs.org/viralplayer/2365840894/'
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
    )
  } 
}


export default (VideoCommunity)