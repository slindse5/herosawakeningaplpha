import React, {Component}  from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import affirmationService from '../Services/requestService'

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {character: undefined};
  }

  async componentDidMount() {
    const { match: { params } } = this.props;

    let affirmation_id = params.affirmation_id;
    let response = await affirmationService.getById(affirmation_id);
    this.setState({character: response.data});
    setTimeout(() => {
      document.getElementById('overlay_blk_fast').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('overlay_blk_fast').style.display = 'none';
      }, 1000);
    }, 10);
  }


  spawnDialog() {
    document.getElementById('overlay_1').style.display = 'block';
    setTimeout(() => {
      document.getElementById('overlay_1').style.opacity = 1;
    }, 10);

  }

  destroyDialog() {
    document.getElementById('overlay_1').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('overlay_1').style.display = 'none';
    }, 1000);
  }
  repeat() {
    document.getElementById('overlay_2').style.opacity = 0;
    document.querySelector('video').play();
    setTimeout(() => {
      document.getElementById('overlay_2').style.display = 'none';
    }, 1000);
  }

  video_ended() {
    document.getElementById('overlay_2').style.display = 'block';
    setTimeout(() => {
      document.getElementById('audio_end').play();
      document.getElementById('overlay_2').style.opacity = 1;
    }, 10);
  }

  render() {
   if (!this.state.character) {return <div></div>};
    return ( 
      <div className="grid-container-player">
        
       //<div className="topleftplayer"></div>
        //<div className="topplayer"></div>
        //<div className="toprightplayer"></div>
        <div className="contentplayer">
            <ReactPlayer
            config={{
                
                  attributes: {
                    'controlsList': 'nodownload'
                  }
            }}
            controls
            className='react-player'
            id="player"
            width="100%"
            height="100%"
            url={this.state.character.video_src}
            onEnded={() => this.video_ended()}
            />
            <audio id="audio_end" src="/Audio/Inner Strength completed quest - play with completed quest prompt.wav"/>
        </div>
        <div className="bottomleftplayer"></div>
        <div className="bottomplayer"></div>
        <div className="bottomrightplayer"></div>
        <div className="aligntopright" onClick={() => {this.spawnDialog()}}>
          <div className="backbtn-white"></div>
        </div>
        <div className="overlay_blk_fast" id="overlay_blk_fast"></div>
        <div className="overlay" id="overlay_1">
          <div className="dialog">
            <div className="dialogcontainer">
              <img className="dialogbg"/>
              <h3 className="dialogtext">Are you sure you would like to go back to the selection page?</h3>
              <h2 className="no" onClick={() => {this.destroyDialog()}}>No</h2>
              <Link to="/affirmation"><h2 className="yes">Yes</h2></Link>
            </div>
          </div>
        </div>
        <div className="overlay" id="overlay_2">
          <div className="dialog">
            <div className="dialogcontainer">
              <img className="dialogbg"/>
              <h3 className="dialogtext">Would you like to repeat this quest?</h3>
              <Link to="/affirmation"><h2 className="no">Go back</h2></Link>
              <h2 className="yes" onClick={() => {this.repeat()}}>Repeat</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;