import React, {Component}  from 'react';
import { Link } from 'react-router-dom';

import Feedback from "feeder-react-feedback";
import "feeder-react-feedback/dist/feeder-react-feedback.css";

import steps from '../audio/music1.mp3';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
  }
  spawnDialog() {
    
    document.getElementById('overlay_3').setAttribute("style","display: block; opacity:1; -moz-opacity:1; filter:alpha(opacity=100); z-index: 20");

}

destroyDialog() {
  document.getElementById('overlay_3').setAttribute("style","display: none; opacity:0; -moz-opacity:0; filter:alpha(opacity=0)");
}
  startGame() {
    var play2 = document.getElementById('steps');
    play2.play();
    var music = document.getElementById('mainVideo');
    music.className = 'zoomin';
    document.getElementById('overlay_blk_slow').style.display = 'block';
    setTimeout(() => {
      document.getElementById('overlay_blk_slow').style.opacity = 1;
     
      setTimeout(() => {
        document.getElementById('linkstart').click();
      }, 3000)
    }, 200)
  }

  render() {
    
    return (
        
        <div>
          
       
        <div className="grid-container-home">  
        <video autoPlay muted loop id="mainVideo">
             <source src="/Video/Main.mp4" type="video/mp4" />
        </video>  
        <div className="contenthome">
          <div className="col-12 home h-100">
            <div className="menu p-4 bgd">
              <div id="boxxy">
              <div className="h1 col-12 py-3">Hero's Awakening</div>
             
              <audio id="steps" src={steps}></audio>
                <div className="h3 menu-button button-1 col-10 offset-2 py-2">
                  <div className="icon"></div>
                  <div onClick={() => {this.startGame()}} className="h3">Begin</div>
                </div>
                <div className="overlay_blk_slow" id="overlay_blk_slow"></div>
                <Link to='/affirmation' id='linkstart'> </Link>
             
              </div>
            </div>
           
          </div>
          <div id='credits'><p>main menu 3d art made by Sargis Ter-Grigoryan</p></div>
          <div className="overlay" id="overlay_3">
          <div className="dialog">
            <div className="dialogcontainer">
              <img className="introbg"/>
              <h2 className="yes" onClick={this.destroyDialog}>Begin</h2>
             
            </div>
          </div>
        </div>
        </div>
      </div>
      
        </div>
    )
  }
}

export default Home;